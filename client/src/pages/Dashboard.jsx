import Sidenav from "../components/Sidenav";
import "./dashboard.css";
import profilePic from "../assets/profilepic.png";
import Badge from "../assets/badge.png";
import TabList from "../components/TabList";
import TabStock from "../components/TabStock";
import Prescription from "../components/Prescription";
import Charts from "../components/Charts";
import Calendar from "../components/Calendar";
import Streaks from "../components/Streaks";
import Tips from "../components/Tips";
import { useState } from "react";

const Dashboard = () => {
	const [userDetails, setUserDetails] = useState([
		{
			name: "John Doe",
			email: "example@gmail.com",
			age: "23",
			gender: "M",
			height: "171",
			weight: "60",
			membership: "Gold",
		},
	]);

	const [doctorList, setDoctorList] = useState([
		{
			name: "Doctor Tyagi",
			number: "8861134955",
			address: "93 NORTH 9TH STREET, BROOKLYN NY 1121",
		},
		{
			name: "Doctor Joshua",
			number: "9393183918",
			address: "380 WESTMINSTER ST, PROVIDENCE RI 02903",
		},
		{
			name: "Doctor Praveen",
			number: "7895397561",
			address: "22 SUSSEX ST, HACKENSACK NJ 07601",
		},
	]);

	return (
		<>
			<div id="content">
				<Sidenav />
				<div id="user-details">
					<div id="profile">
						<img id="profile-pic" src={profilePic}></img>
						<div id="uname">
							<h2 id="name">{userDetails[0].name}</h2>

							<p id="email">{userDetails[0].email}</p>
						</div>
					</div>

					<div id="info">
						<div id="details">
							<p>Age : {userDetails[0].age}</p>
							<p>Gender : {userDetails[0].gender}</p>
							<p>Height : {userDetails[0].height} cm</p>
							<p>Weight : {userDetails[0].weight} kg</p>
						</div>

						<div id="badge-container">
							<img id="badge" src={Badge} />
							<p>{userDetails[0].membership} Member</p>
						</div>
					</div>

					<div id="doctors">
						<table>
							<tr>
								<th>Name</th>
								<th>Ph. Number</th>
								<th>Address</th>
							</tr>
							{doctorList.map((val, key) => {
								return (
									<tr key={key}>
										<td>{val.name}</td>
										<td>{val.number}</td>
										<td>{val.address}</td>
									</tr>
								);
							})}
						</table>
					</div>

					<div id="tips">
						<Tips />
					</div>
				</div>
				<div id="dash-components">
					<div id="r1">
						<div
							id="c1"
							className="component"
							style={{ flexGrow: 6, maxWidth: "20vw" }}
						>
							<TabList />
						</div>
						{/* Pass a parameter to DashboardItem which will select the particular component */}
						<div
							id="c2"
							className="component"
							style={{ flexGrow: 4, maxWidth: "25vw" }}
						>
							<TabStock />
						</div>
						<div
							id="c3"
							className="component"
							style={{ flexGrow: 5, maxWidth: "20vw" }}
						>
							<Prescription />
						</div>
					</div>

					<div id="r2">
						<div
							id="c4"
							className="component"
							style={{ flexGrow: 6 }}
						>
							<Charts chartData={[
								{
									date: new Date(2020, 6, 1).toISOString().slice(0, 10),
									count: 130,
								},
								{
									date: new Date(2021, 5, 1).toISOString().slice(0, 10),
									count: 220,
								},
								{
									date: new Date(2021, 7, 1).toISOString().slice(0, 10),
									count: 250,
								},
								{
									date: new Date(2021, 8, 1).toISOString().slice(0, 10),
									count: 300,
								},
								{
									date: new Date(2022, 12, 1).toISOString().slice(0, 10),
									count: 100,
								},
							]} readingType="Blood Sugar" />

						</div>

						<div
							id="c5"
							className="component"
							style={{ flexGrow: 6 }}
						>
							<Calendar />
						</div>

						<div
							id="c6"
							className="component"
							style={{ flexGrow: 6 }}
						>
							{/* <Streaks /> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Dashboard;
