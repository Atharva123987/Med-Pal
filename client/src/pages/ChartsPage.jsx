import Navbar from "../components/Navbar";
import AllCharts from "../components/Charts";
import { Form, Toast } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiFillPlusCircle } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { BiBarChartAlt2 } from "react-icons/bi";
import "./chartsPage.css";
const Charts = () => {
	const [readingType, setReadingType] = useState("Blood Sugar");
	const [readingValue, setReadingValue] = useState(null);
	const [readingDate, setReadingDate] = useState(null);
	const [showToast, setShowToast] = useState(false);
	const [showError, setShowError] = useState(false);
	const [fetchedData, setFetchedData] = useState([[]]);
	const [requiredError, setRequiredError] = useState(false);
	useEffect(() => {
		handleFetch();
	}, [readingType]);

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
			url: "http://localhost:4000/api/labcounts",
			headers: {
				"Content-Type": "application/json",
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
		try {
			const axios = require("axios");
			let data = JSON.stringify({
				testName: readingType,
			});

			let config = {
				method: "post",
				maxBodyLength: Infinity,
				url: "http://localhost:4000/api/labcounts/type",
				headers: {
					"Content-Type": "application/json",
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
		} catch (err) {
			console.log(err);
			setShowError(true);
		}
	};

	const handleDelete = async (e) => {
		e.preventDefault();
		let config = {
			method: "delete",
			maxBodyLength: Infinity,
			url: "http://localhost:4000/api/labcounts/latest",
			headers: {},
		};

		axios
			.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Navbar buttons={false} />
			<div>
				<h3 id="charts-heading">
					Charts <BiBarChartAlt2 style={{ fontSize: "30px" }} />
				</h3>
			</div>
			<div
				className="d-flex justify-content-evenly"
				id="charts-container"
			>
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
										handleFetch();
									}}
								>
									Blood Sugar
								</Dropdown.Item>
								<Dropdown.Item
									style={{ fontSize: "15px" }}
									onClick={() => {
										setReadingType("Blood Pressure");
										handleFetch();
									}}
								>
									Blood Pressure
								</Dropdown.Item>
								<Dropdown.Item
									style={{ fontSize: "15px" }}
									onClick={() => {
										setReadingType("Haemoglobin");
										handleFetch();
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
								required
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
								required
								onChange={(e) =>
									setReadingDate(new Date(e.target.value))
								}
							/>
						</Form.Group>

						<button
							id="add-value"
							className="bg-dark d-flex"
							onClick={handleSubmit}
						>
							<AiFillPlusCircle id="add-icon" />
						</button>
					</Form>
					<button
						className="btn btn-danger my-3"
						onClick={handleDelete}
					>
						Delete last entry
					</button>
				</div>

				<AllCharts chartData={fetchedData} chartType={readingType} />

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
						position="middle-center"
						show={showToast}
						delay={3000}
						autohide
						style={{ position: "relative", zIndex: "10" }}
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
						position="middle-center"
						show={showError}
						delay={2000}
						autohide
						style={{ position: "relative", zIndex: "10" }}
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
				</div>
			</div>
		</>
	);
};
export default Charts;
