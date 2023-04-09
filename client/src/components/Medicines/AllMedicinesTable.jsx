import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { CgUnavailable } from "react-icons/cg";
import Button from "react-bootstrap/esm/Button";
import { AiFillDelete } from "react-icons/ai";

const AllMedicinesTable = (props) => {
	// const [deleteID, setDeleteID] = useState(null)
	const fetchedData = props.fetchedData;

	useEffect(() => {}, [fetchedData]);

	const handleDelete = async (deleteID) => {
		console.log(deleteID);
		const axios = require("axios");

		let config = {
			method: "delete",
			maxBodyLength: Infinity,
			url: "http://localhost:4000/api/medicines/" + deleteID,
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
						<th>Tablet name</th>
						<th>Tablet quantity</th>
						<th>Tablet expiry</th>
						<th>Tablet frequency</th>
						<th>Tablet time of days</th>
						<th>Remove</th>
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
														<li>
															<CgUnavailable />
														</li>
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
										<td>
											<Button
												onClick={(e) => {
													// setDeleteID(element._id)
													handleDelete(element._id);
												}}
												variant="danger"
											>
												<AiFillDelete />
											</Button>
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
