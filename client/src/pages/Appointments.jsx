import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Calendar from '../components/Calendar'
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaClinicMedical } from 'react-icons/fa'
import AddAppointmentModal from '../components/Appointments/AddAppointmentModal'
import './appointments.css'
import { useAuthContext } from "../hooks/useAuthContext";
import Sidenav from '../components/Sidenav'
import Footer from '../components/Footer'

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
	const {user} = useAuthContext();


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
			url: "https://medpal-backend.onrender.com/api/appointments",
			headers: {
				"Content-Type": "application/json",
				Authorization:`Bearer ${user.token}`
			},
			data: data,
		};

		axios
			.request(config)
			.then((response) => {
				handleFetch();
			})
			.catch((error) => {
				console.log(error);
			});

		try {
			
			if (doctorName) setShow(true);
			else setError(true);
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};



	useEffect(() =>{
		
		handleFetch()
	}, [])

	
	const handleFetch = async (e) => {
		try {
			const axios = require("axios");
			let config = {
				method: "get",
				url: "https://medpal-backend.onrender.com/api/appointments",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${user.token}`,
				},
				data: {},
			};
			const response = await axios(config);
			setFetchedData(response.data);
		} catch (err) {
			console.log(err);
		}
	}
	


	return (
		<>

				<div
					id="toasts"
					style={{
						position: "relative",
						zIndex: "30",
					}}
				>
					<Toast
						onClose={() => setShow(false)}
						bg="success"
						position="middle-center"
						show={show}
						delay={3000}
						autohide
						style={{
							position: "fixed",
							top: "10%",
							right: "3%",
						}}
					>
						<Toast.Header className="text-success">
							<img
								src="holder.js/20x20?text=%20"
								className="rounded me-2"
								alt=""
							/>
							<strong className="me-auto">
								Appointment Added!
							</strong>
							<small className="text-secondary">
								Doctor{" "}
								{doctorName?.charAt(0).toUpperCase() +
									doctorName?.slice(1)}
							</small>
						</Toast.Header>
						<Toast.Body className="text-white">
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
						style={{
							position: "fixed",
							top: "10%",
							right: "3%",
						}}
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

				<Navbar buttons='true' LogButton='true' />

				<div className="page-container" > 
				<Sidenav />

				<div className="w-100" style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
					<div style={{marginBottom:"auto"}}>
					<h3 className="charts-heading">
						My Appointments <FaClinicMedical style={{ fontSize: "30px" }} />
					</h3>
						
				<div id='appointments-container' >
				
				<Calendar id='calendar-component' appointments={fetchedData? fetchedData : null} setDoctorName={setDoctorName} 
				setDoctorNumber={setDoctorNumber} 
				setDoctorAddress={setDoctorAddress} 
				setNotes={setNotes} 
				setAppointmentDateAndTime={setAppointmentDateAndTime} 
				handleSubmit={handleSubmit}
				handleFetch={handleFetch}
				showList={true}
				/>

				</div>
				</div>
				<Footer/>
			</div>
			</div>
		</>
	);
};
export default Appointments;
