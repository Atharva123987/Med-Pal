import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
const Appointments = () => {
	const [doctorName, setDoctorName] = useState(null);
	const [doctorNumber, setDoctorNumber] = useState(null);
	const [doctorAddress, setDoctorAddress] = useState(null);
	const [notes, setNotes] = useState(null);
	const [appointmentDateAndTime, setAppointmentDateAndTime] = useState(null);
	const [fetchedData, setFetchedData] = useState(null);
	const [show, setShow] = useState(false);
	const [month, setMonth] = useState("");
	const [error, setError] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();

		switch (appointmentDateAndTime?.getMonth()) {
			case 0:
				setMonth("January");
				break;
			case 1:
				setMonth("February");
				break;
			case 2:
				setMonth("March");
				break;
			case 3:
				setMonth("April");
				break;
			case 4:
				setMonth("May");
				break;
			case 5:
				setMonth("June");
				break;
			case 6:
				setMonth("July");
				break;
			case 7:
				setMonth("August");
				break;
			case 8:
				setMonth("September");
				break;
			case 9:
				setMonth("October");
				break;
			case 10:
				setMonth("November");
				break;
			case 11:
				setMonth("December");
				break;
			default:
				setMonth("");
		}

		// !!!HANDLE POST REQUST HERE
		let data = JSON.stringify({
			doctorName: doctorName,
			phoneNumber: doctorNumber,
			address: doctorAddress,
			timeAndDate: appointmentDateAndTime,
			notes: notes,
		});

		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: "http://localhost:4000/api/appointments",
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data));
			})
			.catch((error) => {
				console.log(error);
			});

		try {
			console.log("Sent Data :", {
				doctorName,
				doctorNumber,
				doctorAddress,
				appointmentDateAndTime,
				notes,
			});
			if (doctorName) setShow(true);
			else setError(true);
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	const handleFetch = async (e) => {
		// try {
		// 	// !!!HANDLE GET REQUEST HERE
		// 	const response = await axios.get(
		// 		`https://random-data-api.com/api/v2/users?size=5`
		// 	);
		// 	setFetchedData(response.data);
		// 	console.log("Fetched Data :", response.data);
		// } catch (err) {
		// 	console.log(err);
		// }

		try {
			const response = await axios.get(
				`http://localhost:4000/api/appointments`
			);
			setFetchedData(response.data);
			console.log(response.data[0]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="w-100">
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
						onClose={() => setShow(false)}
						bg="light"
						position="middle-center"
						show={show}
						delay={3000}
						autohide
						style={{
							position: "fixed",
							zIndex: "10",
							top: "3%",
							right: "3%",
						}}
					>
						<Toast.Header>
							<img
								src="holder.js/20x20?text=%20"
								className="rounded me-2"
								alt=""
							/>
							<strong className="me-auto">
								Appointment Added!
							</strong>
							<small>
								Doctor{" "}
								{doctorName?.charAt(0).toUpperCase() +
									doctorName?.slice(1)}
							</small>
						</Toast.Header>
						<Toast.Body>
							<b>
								{appointmentDateAndTime?.getDate()}th of {month}
							</b>{" "}
							at <b>{appointmentDateAndTime?.getHours()}</b>:
							<b>{appointmentDateAndTime?.getMinutes()}</b>{" "}
						</Toast.Body>
					</Toast>

					<Toast
						onClose={() => {
							setError(false);
						}}
						bg="danger"
						position="middle-center"
						show={error}
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
								Appointment is already scheduled!
							</strong>
						</Toast.Header>
						<Toast.Body className="text-white">
							You can update the existing appointment if you want
							to
						</Toast.Body>
					</Toast>
				</div>

				<h1>Appointments Page</h1>
				<div className="d-flex justify-content-evenly">
					<Form>
						<Form.Group className="mb-3 " controlId="doctorName">
							<Form.Label>Doctor Name</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter name"
								onChange={(e) => setDoctorName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="doctorNumber">
							<Form.Label>Doctor Ph.no</Form.Label>
							<Form.Control
								type="tel"
								placeholder="Enter number"
								onChange={(e) =>
									setDoctorNumber(e.target.value)
								}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="doctorAddress">
							<Form.Label>Address</Form.Label>
							<textarea
								placeholder="Enter address"
								onChange={(e) =>
									setDoctorAddress(e.target.value)
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="notes">
							<Form.Label>Notes</Form.Label>
							<textarea
								placeholder="Enter notes"
								onChange={(e) => setNotes(e.target.value)}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="appointmentTime"
						>
							<Form.Label>Time</Form.Label>
							<Form.Control
								type="datetime-local"
								placeholder="Time"
								onChange={(e) =>
									setAppointmentDateAndTime(
										new Date(e.target.value)
									)
								}
							/>
						</Form.Group>

						<Button
							variant="primary"
							type="submit"
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</Form>
					<div className="ml-5">
						<h3>Upcoming appointments</h3>
						<dl></dl>
						<br></br>
						<h2>Fetch Appointments and Doctor details</h2>
						<button
							className="btn btn-primary"
							onClick={handleFetch}
						>
							Fetch Appointements
						</button>
						<div style={{ height: "50vh", overflowY: "scroll" }}>
							<ol>
								{fetchedData &&
									fetchedData.map((element, i) => {
										return (
											<li key={i}>
												<ul>
													<li
														key={element.doctorName}
													>
														{element.doctorName}
													</li>
													<li
														key={
															element.phoneNumber
														}
													>
														{element.phoneNumber}
													</li>
													<li key={element.address}>
														{element.address}
													</li>
													<li
														key={
															element.timeAndDate
														}
													>
														{element.timeAndDate}
													</li>
													<li key={element.notes}>
														{element.notes}
													</li>
												</ul>
											</li>
										);
									})}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Appointments;
