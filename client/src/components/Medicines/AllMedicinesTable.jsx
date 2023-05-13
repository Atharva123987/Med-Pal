import Table from "react-bootstrap/Table";
import { useState, useEffect, useRef } from "react";
import { CgUnavailable } from "react-icons/cg";
import Button from "react-bootstrap/esm/Button";
import { AiFillDelete } from "react-icons/ai";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useAuthContext } from "../../hooks/useAuthContext";
import LoadingCircle from "../SkeletonLoaders/LoadingCircle";
const AllMedicinesTable = (props) => {
	const fetchedData = props.fetchedData;
	const [showPopup, setShowPopup] = useState(false);
	const [target, setTarget] = useState(null);
	const [deleteID, setDeleteID] = useState(null);
	const ref = useRef(null);
	const [clickedIndex, setClickedIndex] = useState(null);
	const { user } = useAuthContext();

	const handlePopup = (event, deleteID, index) => {
		setDeleteID(deleteID);
		setShowPopup(true);
		setClickedIndex(index);
	};

	const handleClosePopup = () => {
		setShowPopup(false);
	};
	const popover = (
		<Popover id="popover-basic">
			<Popover.Header as="h3" className="text-white bg-danger">
				Warning
			</Popover.Header>
			<Popover.Body>
				Are you sure you want to <strong>delete this medicine?</strong>
				<Button
					variant="danger"
					className="mx-2"
					onClick={(e) => {
						handleDelete(deleteID);
						handleClosePopup();
					}}
				>
					Yes
				</Button>
				<Button variant="dark" onClick={() => setShowPopup(false)}>
					No
				</Button>
			</Popover.Body>
		</Popover>
	);

	const handleDelete = async (deleteID) => {
		const axios = require("axios");

		let config = {
			method: "delete",
			maxBodyLength: Infinity,
			url:
				"https://medpal-backend.onrender.com/api/medicines/" + deleteID,
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		};

		axios
			.request(config)
			.then((response) => {
				// console.log(JSON.stringify(response.data));
				props.setDeleteCalled(!props.deleteCalled);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if(!fetchedData){
		return(
			<>
			<LoadingCircle/>
			</>
		)
	}

	return (
		<>
			<Table striped bordered hover>
				<thead>
					<tr
						style={{
							position: "sticky",
							top: "0%",
							color: "white",
							background: "#212529",
						}}
					>
						<th>Medicine name</th>
						<th>Medicine quantity</th>
						<th>Medicine expiry</th>
						<th>Medicine frequency</th>
						<th>Medicine time of days</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{fetchedData &&
						fetchedData.map((element, idx) => {
							return (
								<>
									<tr key={element._id}>
										<td>{element.name}</td>
										<td>{element.quantity}</td>
										<td>
											{new Date(
												element.expiry
											).toLocaleDateString()}
										</td>
										<td>
											{element.frequency ? (
												element.frequency
											) : (
												<CgUnavailable />
											)}
										</td>
										<td>
											{
												<ul id="meds-table-list">
													{element?.timeOfDay &&
													Object.values(
														element.timeOfDay
													).every(
														(val) => !val.yesOrNot
													) ? (
														<CgUnavailable />
													) : (
														<>
															{element?.timeOfDay
																?.morning
																?.yesOrNot && (
																<li>
																	Morning{" "}
																	{
																		fetchedData[0]
																			.timeOfDay
																			.morning
																			.yesOrNot
																	}
																</li>
															)}
															{element?.timeOfDay
																?.afternoon
																?.yesOrNot && (
																<li>
																	Afternoon{" "}
																	{
																		fetchedData[0]
																			.timeOfDay
																			.afternoon
																			.yesOrNot
																	}
																</li>
															)}
															{element?.timeOfDay
																?.evening
																?.yesOrNot && (
																<li>
																	Evening{" "}
																	{
																		fetchedData[0]
																			.timeOfDay
																			.evening
																			.yesOrNot
																	}
																</li>
															)}
															{element?.timeOfDay
																?.night
																?.yesOrNot && (
																<li>
																	Night{" "}
																	{
																		fetchedData[0]
																			.timeOfDay
																			.night
																			.yesOrNot
																	}
																</li>
															)}
														</>
													)}
												</ul>
											}
										</td>
										<td id="popup-overlay">
											<OverlayTrigger
												trigger="click"
												placement="right"
												overlay={popover}
												rootClose
												flip
												fallbackPlacements={[
													"left",
													"top",
													"bottom",
												]}
												show={
													showPopup &&
													clickedIndex === idx
												}
												onHide={() => {
													setShowPopup(false);
													setClickedIndex(null);
												}}
											>
												<Button
													onClick={(e) => {
														handlePopup(
															e,
															element._id,
															idx
														);
													}}
													variant="danger"
												>
													<AiFillDelete id="delete-button-overlay" />
												</Button>
											</OverlayTrigger>
										</td>
									</tr>
								</>
							);
						})}
				</tbody>
			</Table>
		</>
	);
};
export default AllMedicinesTable;
