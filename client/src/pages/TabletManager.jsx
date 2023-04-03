import Form from "react-bootstrap/Form";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import Table from "react-bootstrap/Table";
const TabletManager = () => {
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [expiry, setExpiry] = useState(new Date());
	const [dosageEnd, setDosageEnd] = useState(new Date());
	const [frequency, setFrequency] = useState(null);
	const checkboxesRef = useRef([]);
	const [selectedFile, setSelectedFile] = useState(null);
	const [fetchedData, setFetchedData] = useState(null);
	const [show, setShow] = useState(false);
	const [nameError, setNameError] = useState(false);
	const [flag, setFlag] = useState(0);
	const isMountedRef = useRef(false);

	useEffect(() => {
		// if (isMountedRef.current) {
		handleFetch();
		// } else {
		// isMountedRef.current = true;
		// }
	}, [flag]);

	const handleFetch = async (e) => {
		try {
			const response = await axios.get(
				`http://localhost:4000/api/medicines`
			);
			setFetchedData(response.data);
			console.log(response.data[0]);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async (e) => {
		// MAKE POST REQUEST HERE
		e.preventDefault();

		const checkedValues = checkboxesRef.current
			.filter((checkbox) => checkbox.checked)
			.map((checkbox) => checkbox.value);
		var timeOfDay = [];
		checkboxesRef.current.forEach((checkbox, i) => {
			timeOfDay.push(checkbox.checked);
		});
		// console.log("HERRE", timeOfDay);

		const axios = require("axios");
		let data = JSON.stringify({
			name: name,
			quantity: quantity,
			expiry: expiry,
			frequency: frequency,
			timeOfDay: {
				morning: {
					yesOrNot: timeOfDay[0],
					beforeFood: true,
				},
				afternoon: {
					yesOrNot: timeOfDay[1],
					beforeFood: true,
				},
				evening: {
					yesOrNot: timeOfDay[2],
					beforeFood: true,
				},
				night: {
					yesOrNot: timeOfDay[3],
					beforeFood: true,
				},
			},
			dosageEndDate: dosageEnd,
		});

		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: "http://localhost:4000/api/medicines",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};

		axios
			.request(config)
			.then((response) => {
				// alert("Tablet added successfully");
				if (response.status === 200) {
					setShow(true);
					setFlag(!flag);
				}
			})
			.catch((error) => {
				// alert(error);
				setNameError(true);
			});
	};

	return (
		<>
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
						setShow(false);
					}}
					bg="success"
					position="middle-center"
					show={show}
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
							Tablet Added!
						</strong>
						<small>
							{frequency?.charAt(0).toUpperCase() +
								frequency?.slice(1)}
						</small>
					</Toast.Header>
					<Toast.Body className="text-white">
						Name : {name} | Quantity : {quantity}
					</Toast.Body>
				</Toast>
				<Toast
					onClose={() => {
						setNameError(false);
					}}
					bg="danger"
					position="middle-center"
					show={nameError}
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
							Enter Valid Name!
						</strong>
					</Toast.Header>
					<Toast.Body className="text-white">
						Tablet name should be unique
					</Toast.Body>
				</Toast>
			</div>
			<h1>Tab manager</h1>

			<div className="d-flex flex-row justify-content-evenly">
				<Form>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
						style={{ width: "300px" }}
					>
						<Form.Label>Tablet Name</Form.Label>
						<Form.Control
							type="email"
							placeholder="Name"
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
						style={{ width: "300px" }}
					>
						<Form.Label>Tablet Quantity</Form.Label>
						<Form.Control
							type="number"
							placeholder="10"
							onChange={(e) => setQuantity(e.target.value)}
						/>
					</Form.Group>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
						style={{ width: "300px" }}
					>
						<Form.Label>Tablet Expiry</Form.Label>
						<Form.Control
							type="date"
							placeholder="10"
							onChange={(e) => setExpiry(e.target.value)}
						/>
					</Form.Group>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
						style={{ width: "300px" }}
					>
						<Form.Label>Tablet Frequency</Form.Label>
						<br></br>
						<label htmlFor="daily">Daily</label>
						<input
							type="checkbox"
							name="frequency"
							value="daily"
							onChange={(e) => {
								setFrequency(e.target.value);
							}}
						/>
						<br></br>
					</Form.Group>
					<Form.Group
						className="mb-3"
						controlId="exampleForm.ControlInput1"
						style={{ width: "300px" }}
					/>
					<Form.Label>Tablet TimeOfDay</Form.Label>
					<br></br>
					<label htmlFor="morning">Morning</label>
					<input
						type="checkbox"
						placeholder="name@example.com"
						name="timeOfDay"
						value="morning"
						ref={(el) => (checkboxesRef.current[0] = el)}
					/>
					<label htmlFor="afternoon">Afternoon</label>
					<input
						type="checkbox"
						placeholder="name@example.com"
						name="timeOfDay"
						value="afternoon"
						ref={(el) => (checkboxesRef.current[1] = el)}
					/>
					<label htmlFor="evening">Evening</label>
					<input
						type="checkbox"
						placeholder="name@example.com"
						name="timeOfDay"
						value="evening"
						ref={(el) => (checkboxesRef.current[2] = el)}
					/>
					<label htmlFor="night">Night</label>
					<input
						type="checkbox"
						placeholder="name@example.com"
						name="timeOfDay"
						value="night"
						ref={(el) => (checkboxesRef.current[3] = el)}
					/>
					<br></br>
					{/* <Form.Label>Upload Prescription</Form.Label>
          <Form.Control
            type="file"
            style={{ width: "300px" }}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          /> */}
					<button className="btn btn-primary " onClick={handleSubmit}>
						Add Tablet
					</button>
				</Form>
				<div style={{ height: "80vh", overflow: "scroll" }}>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Tablet name</th>
								<th>Tablet quantity</th>
								<th>Tablet expiry</th>
								<th>Tablet frequency</th>
								<th>Tablet time of days</th>
							</tr>
						</thead>
						<tbody>
							{fetchedData &&
								fetchedData.map((element, idx) => {
									return (
										<>
											<tr>
												<td>{element.name}</td>
												<td>{element.quantity}</td>
												<td>
													{new Date(
														element.expiry
													).toLocaleDateString()}
												</td>

												<td>{element.frequency}</td>
												<td>{}</td>
											</tr>
										</>
									);
								})}
						</tbody>
					</Table>
				</div>
			</div>
		</>
	);
};

export default TabletManager;
