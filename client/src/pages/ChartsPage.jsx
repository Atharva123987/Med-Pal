import Navbar from "../components/Navbar";
import AllCharts from "../components/Charts";
import { Form, OverlayTrigger, Popover, Toast } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiFillPlusCircle } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { BiBarChartAlt2 } from "react-icons/bi";
import { useAuthContext } from "../hooks/useAuthContext";
import "./chartsPage.css";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import LoadingCircle from "../components/SkeletonLoaders/LoadingCircle";

const Charts = () => {
	const { user } = useAuthContext();
	const [readingType, setReadingType] = useState("Blood Sugar");
	const [readingValue, setReadingValue] = useState(null);
	const [readingDate, setReadingDate] = useState(null);
	const [showToast, setShowToast] = useState(false);
	const [showError, setShowError] = useState(false);
	const [fetchedData, setFetchedData] = useState(null);
	const [requiredError, setRequiredError] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const [showDeletePopup, setShowDeletePopup] = useState(false);
	const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

	useEffect(() => {
		handleFetch();
	}, [readingType]);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);


	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!readingValue || !readingDate) {
			setShowError(true);
			setRequiredError(true);
		} else if (readingValue && readingDate) {
			setRequiredError(false);
		}

		let data = JSON.stringify({
			testName: readingType,
			count: readingValue,
			dateTaken: readingDate,
		});

		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: "https://medpal-backend.onrender.com/api/labcounts",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
			data: data,
		};

		axios
			.request(config)
			.then((response) => {
				setShowToast(true);
				handleFetch();
			})
			.catch((error) => {
				console.log(error);
				setShowError(true);
			});
	};
	const handleFetch = async (e) => {
		// e.preventDefault();

		const axios = require("axios");
		let data = JSON.stringify({
			testName: readingType,
		});
		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: "https://medpal-backend.onrender.com/api/labCounts/type",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
			data: data,
		};
		axios
			.request(config)
			.then((response) => {
				setFetchedData(response.data);
			})
			.catch((error) => {
				setShowError(true);
			});
	};

	const handleDelete = async () => {
		// e.preventDefault();
		let data = JSON.stringify({
			testName: readingType,
		});
		let config = {
			method: "delete",
			maxBodyLength: Infinity,
			url: "https://medpal-backend.onrender.com/api/labcounts/latest",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
			data: data,
		};

		axios
			.request(config)
			.then((response) => {
				handleFetch();
				setShowDeleteSuccess(true);
			})
			.catch((error) => {
				handleFetch();
				console.log(error);
			});
	};

	const handleClosePopup = () => {
		setShowDeletePopup(false);
	};

	const popover = (
		<Popover id="popover-basic">
			<Popover.Header as="h3" className="text-white bg-danger">
				Warning
			</Popover.Header>
			<Popover.Body>
				Are you sure you want to <strong>delete this reading?</strong>
				<Button
					variant="danger"
					className="mx-2"
					onClick={(e) => {
						handleDelete();
						handleClosePopup();
					}}
				>
					Yes
				</Button>
				<Button variant="dark" onClick={() => setShowDeletePopup(false)}>
					No
				</Button>
			</Popover.Body>
		</Popover>
	);

	return (
		<>
				<Navbar buttons='true' LogButton='true' />
			
			<div className="page-container">
				<Sidenav />
				<div id="charts-container">

					<div>
						<h3 className="charts-heading">
							Charts <BiBarChartAlt2 style={{ fontSize: "30px" }} />
						</h3>
					</div>


					{
						!fetchedData ? (
							<div className="d-flex justify-content-center h-100">
								<LoadingCircle />
								</div>
						) : (
							<div className="d-flex  justify-content-evenly h-100 chart-container-bottom">
								<div>
									<Form id="charts-form">
										<h4>Add reading</h4>

										<Dropdown as={ButtonGroup} id="chart-dropdown">
											<Dropdown.Toggle
												split
												variant="dark"
												id="dropdown-split-basic"
												drop="end"
												key="end"
											>
												{readingType ? readingType : "Select a chart"}
											</Dropdown.Toggle>

											<Dropdown.Menu>
												<Dropdown.Item
													style={{ fontSize: "15px" }}
													onClick={() => {
														setReadingType("Blood Sugar");
													}}
												>
													Blood Sugar
												</Dropdown.Item>
												<Dropdown.Item
													style={{ fontSize: "15px" }}
													onClick={() => {
														setReadingType("Blood Pressure");
													}}
												>
													Blood Pressure
												</Dropdown.Item>
												<Dropdown.Item
													style={{ fontSize: "15px" }}
													onClick={() => {
														setReadingType("Haemoglobin");
													}}
												>
													Haemoglobin
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>

										<Form.Group
											className="mb-3"
											controlId="exampleForm.ControlInput2"
											style={{ width: "300px" }}
										>
											<Form.Label>
												Reading value{" "}
												{requiredError && (
													<p
														style={{ all: "unset" }}
														className="text-danger"
													>
														*
													</p>
												)}
											</Form.Label>
											<Form.Control
												type="number"
												placeholder="Value"
												onChange={(e) =>
													setReadingValue(e.target.value)
												}
											/>
										</Form.Group>

										<Form.Group
											className="mb-3"
											controlId="appointmentTime"
										>
											<Form.Label>
												Date{" "}
												{requiredError && (
													<p
														style={{ all: "unset" }}
														className="text-danger"
													>
														*
													</p>
												)}
											</Form.Label>
											<Form.Control
												type="date"
												placeholder="Enter date"
												onChange={(e) =>
													setReadingDate(new Date(e.target.value))
												}
											/>
										</Form.Group>
										<div className="d-flex flex-row chart-button-div">


											<OverlayTrigger
												trigger="click"
												placement="top"
												overlay={popover}
												rootClose
												flip
												fallbackPlacements={["left", "top", "bottom"]}
												show={showDeletePopup}
												onHide={() => {
													setShowDeletePopup(false);
													// setClickedIndex(null);
												}}

											>
												<button
													className="btn btn-danger h-50"
													onClick={(e) => { e.preventDefault(); setShowDeletePopup(true) }}
												>
													Delete last entry
												</button>
											</OverlayTrigger>


											<button
												id="add-value"
												className="bg-dark d-flex"
												onClick={handleSubmit}
											>
												<AiFillPlusCircle id="add-icon" />
											</button>
										</div>
									</Form>

								</div>

								<AllCharts
									chartData={fetchedData}
									chartType={readingType}

								/>
							</div>
						)
					}



					<div
						id="toasts"
						style={{
							position: "fixed",
							zIndex: "10",
							top: "3%",
							right: "3%",
						}}
					>
						<Toast
							onClose={() => {
								setShowToast(false);
							}}
							bg="success"
							show={showToast}
							delay={3000}
							autohide
							style={{ position: "relative", zIndex: "10", top: "4rem" }}
						>
							<Toast.Header>
								<img
									src="holder.js/20x20?text=%20"
									className="rounded me-2"
									alt=""
								/>
								<strong className="me-auto text-success">
									Value Added!
								</strong>
								<small>{readingType}</small>
							</Toast.Header>
							<Toast.Body className="text-white">
								Value <b>:</b> {readingValue}
							</Toast.Body>
						</Toast>

						<Toast
							onClose={() => {
								setShowError(false);
							}}
							bg="danger"
							show={showError}
							delay={2000}
							autohide
							style={{ position: "relative", zIndex: "10", top: "4rem" }}
						>
							<Toast.Header>
								<img
									src="holder.js/20x20?text=%20"
									className="rounded me-2"
									alt=""
								/>
								<strong className="me-auto text-danger">
									Check all fields!
								</strong>
							</Toast.Header>
							<Toast.Body className="text-white">
								All fields are mandatory
							</Toast.Body>
						</Toast>

						<Toast
							onClose={() => {
								setShowDeleteSuccess(false);
							}}
							bg="secondary"
							show={showDeleteSuccess}
							delay={2000}
							autohide
							style={{ position: "relative", zIndex: "10", top: "4rem" }}
						>
							<Toast.Header>
								<strong className="me-auto text-danger">
									Reading deleted!
								</strong>
							</Toast.Header>
							<Toast.Body className="text-white">
								Reading deleted successfully
							</Toast.Body>
						</Toast>

					</div>

					<Footer />
				</div>
			</div>
		</>
	);
};
export default Charts;
