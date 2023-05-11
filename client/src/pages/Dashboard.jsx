import Sidenav from "../components/Sidenav";
import "./dashboard.css";
import Badge from "../assets/badge.png";
import TabList from "../components/TabList";
import TabStock from "../components/TabStock";
import Prescription from "../components/Prescription";
import Charts from "../components/Charts";
import Calendar from "../components/Calendar";
import Streaks from "../components/Streaks";
import Tips from "../components/Tips";
import { useState } from "react";
import AllCharts from '../components/Charts'
import { useEffect } from "react";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useAuthContext } from "../hooks/useAuthContext";
import { Link, Navigate } from "react-router-dom";
import { Toast } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import LoadingCircle from "../components/SkeletonLoaders/LoadingCircle";


const Dashboard = () => {
	const { user } = useAuthContext();
	const [userDetails, setUserDetails] = useState(null);
	const [doctorList, setDoctorList] = useState(null);
	const [appointments, setAppointments] = useState(null)
	const [readingType, setReadingType] = useState("Blood Sugar")
	const [fetchedChartData, setFetchedChartData] = useState(null)
	const [fetchedMedicinesData, setFetchedMedicinesData] = useState(null)
	const [fetchedReportsData, setFetchedReportsData] = useState(null)
	const [doctorName, setDoctorName] = useState("");
	const [doctorNumber, setDoctorNumber] = useState("");
	const [doctorAddress, setDoctorAddress] = useState("");
	const [notes, setNotes] = useState("");
	const [appointmentDateAndTime, setAppointmentDateAndTime] = useState("");
	const [showTaken, setShowTaken] = useState(false);
	const [tabletName, setTabletName] = useState(null)
	const [showAlreadyAddedToast, setShowAlreadyAddedToast] = useState(false);

	useEffect(() => {
		handleFetch()
	}, [])



	const handleFetch = async (e) => {

		const axios = require("axios");
		let data = JSON.stringify({
			testName: readingType,
		});
		let configCharts = {
			method: "post",
			maxBodyLength: Infinity,
			url: "https://medpal-backend.onrender.com/api/labcounts/type",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`
			},
			data: data,
		};

		let configMedicines = {
			method: "get",
			maxBodyLength: Infinity,
			url: "https://medpal-backend.onrender.com/api/medicines",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`
			},
		};

		let configReports = {
			method: "get",
			maxBodyLength: Infinity,
			url: "https://medpal-backend.onrender.com/api/reportsStore",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`
			},
			data: data,
		};
		let configUser = {
			method: "get",
			maxBodyLength: Infinity,
			url: `https://medpal-backend.onrender.com/api/user/${user.user_id}`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`
			},
			data: data,
		};

		let configAppointments = {
			method: "get",
			maxBodyLength: Infinity,
			url: `https://medpal-backend.onrender.com/api/appointments/`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`
			},
			data: data,
		};

		axios
			.request(configCharts)
			.then((response) => {
				setFetchedChartData(response.data);

			})
			.catch((error) => {
				// setShowError(true);
			});

		axios.request(configUser)
			.then((res) => setUserDetails(res.data))
			.catch((err) => console.log(err))

		axios.request(configMedicines)
			.then((res) => setFetchedMedicinesData(res.data))
			.catch((err) => console.log(err))

		axios.request(configReports)
			.then((res) => setFetchedReportsData(res.data))
			.catch((err) => console.log(err))

		axios.request(configAppointments)
			.then((res) => setAppointments(res.data))
			.catch((err) => console.log(err))

	};

	return (
		<>
			<Navbar />
			<div id="content">


				<Sidenav />
				<Toast
					onClose={() => {
						setShowTaken(false);
					}}
					bg="success"
					show={showTaken}
					position='middle-center'
					delay={2000}
					autohide
					style={{ position: "fixed", zIndex: "10", right: "2rem", top: "10%" }}
				>
					<Toast.Header>
						<img
							src="holder.js/20x20?text=%20"
							className="rounded me-2"
							alt=""
						/>
						<strong className="me-auto text-success">
							Tablet Taken!
						</strong>
					</Toast.Header>
					<Toast.Body className="text-white">
						{tabletName}
					</Toast.Body>
				</Toast>

				<Toast
					onClose={() => {
						setShowAlreadyAddedToast(false);
					}}
					bg="danger"
					show={showAlreadyAddedToast}
					delay={2000}
					autohide
					style={{ position: "fixed", zIndex: "10", right: "2rem", top: "10%" }}
				>
					<Toast.Header>
						<img
							src="holder.js/20x20?text=%20"
							className="rounded me-2"
							alt=""
						/>
						<strong className="me-auto text-danger">
							Streak already incremented!
						</strong>
					</Toast.Header>
					<Toast.Body className="text-white">
						Streak has already been incremented for today
					</Toast.Body>
				</Toast>
				<div id="user-details">

					<div id="profile">
						<img id="profile-pic" alt="profile" src='https://ik.imagekit.io/0qlf5pqwx/am-a-19-year-old-multimedia-artist-student-from-manila_-_21.png?updatedAt=1681593465157'></img>

						<div id="uname">

							<h2 id="name">{userDetails?.name}</h2>

							<p id="email">{userDetails?.email}</p>
						</div>
					</div>

					<div id="info">
						<div id="details">
							<div class="arrow-down"></div>
							<p>Age : {userDetails?.age}</p>
							<p>Gender : {userDetails?.gender[0].toUpperCase() + userDetails?.gender.slice(1, 10)}</p>
							<p>Height : {userDetails?.height} cm</p>
							<p>Weight : {userDetails?.weight} kg</p>
						</div>
					</div>

					<div id="tips-container">
						<Tips />
					</div>

					<div id="badge-container">
						<img id="badge" src={Badge} />
						<p>Gold Member</p>
					</div>
				</div>

				<div id="dash-components">
					<div id="r1">
						<div
							id="c1"
							className="component"
						>
							<TabList fetchedMedicineData={fetchedMedicinesData ? fetchedMedicinesData : null} handleFetch={handleFetch} showTaken={showTaken} setShowTaken={setShowTaken} setTabletName={setTabletName} />

						</div>

						<div
							id="c2"
							className="component"
						>
							<TabStock fetchedMedicineData={fetchedMedicinesData ? fetchedMedicinesData : null} handleFetch={handleFetch} showTaken={showTaken} setShowTaken={setShowTaken} setTabletName={setTabletName} />
						</div>
						<div
							id="c3"
							className="component"
						>
							<Prescription fetchedReportsData={fetchedReportsData ? fetchedReportsData : null} />
						</div>
					</div>

					<div id="r2">

						<div id="c4" className="component d-flex flex-column">
							{
								!fetchedChartData ? (<>
								<div className="dash-component">
									<legend align="center" >Charts</legend>
									<LoadingCircle />
									</div>
								</>
								) : (
									<AllCharts chartData={fetchedChartData ? fetchedChartData : {}} chartType={readingType} width={450} height={230} />

								)
							}

						</div>

						<div id="c5" className="component">
							{
								!appointments ? (
									<>
										<div className="dash-component">
										<legend align="center" >Appointments</legend>
										<LoadingCircle />
										</div>
									</>
								) : (
									<>
										<legend align="center">Appointments</legend>
										<Calendar
											appointments={appointments}
											setDoctorName={setDoctorName}
											setDoctorNumber={setDoctorNumber}
											setDoctorAddress={setDoctorAddress}
											setNotes={setNotes}
											setAppointmentDateAndTime={setAppointmentDateAndTime}
										/>
									</>
								)
							}


						</div>

						<div
							id="c6"
							className="component"
						>
							<Streaks setShowAlreadyAddedToast={setShowAlreadyAddedToast} />
						</div>

					</div>
				</div>
			</div>
		</>
	);
};
export default Dashboard;
