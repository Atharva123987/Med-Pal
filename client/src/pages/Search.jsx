import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../components/searchsidebar.css";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './search.css'
import Card from 'react-bootstrap/Card';
import {IoIosNavigate} from 'react-icons/io'

const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [filters, setFilters] = useState("");
	const [results, setResults] = useState(null);
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(1000);
	const [distanceValue, setDistanceValue] = useState(500);
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			setLatitude(latitude);
			setLongitude(longitude);
			// You can now use these values to search for nearby documents
		});
	} else {
		console.log("Geolocation is not supported by this browser");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const axios = require("axios");
		let newData = JSON.stringify({
			latitude: Number(latitude),
			longitude: Number(longitude),
			distance: Number(distanceValue),
			speciality: filters,
		});
		console.log(newData);
		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: "http://localhost:4000/api/doctors/nearby",
			headers: {
				"Content-Type": "application/json",
			},
			data: newData,
		};

		await axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				setResults(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};


	useEffect(()=>console.log(filters),[filters])
	return (
		<>
			<div className="sidebar">
				<Form onSubmit={handleSubmit}>
					{/* <Form.Group>
						<Form.Control
							type="text"
							name="searchQuery"
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</Form.Group> */}
					<Form.Group>
						<label htmlFor="distanceSlider">
							Distance (in miles): {distanceValue}
						</label>
						<Form.Control
							type="range"
							name="distanceSlider"
							min={min}
							max={max}
							value={distanceValue}
							onChange={(e) => setDistanceValue(e.target.value)}
						/>
					</Form.Group>
					<Form.Group>
						<label>Category:</label>
						
						<DropdownButton title={`${filters?filters:"Select a category"}`} onSelect={(e)=>setFilters(e)}>
							
							<Dropdown.Item style={{fontSize:"15px"}} eventKey="">Select a category</Dropdown.Item>
							<Dropdown.Item style={{fontSize:"15px"}} eventKey="Cardiologist">Cardiologist</Dropdown.Item>
							<Dropdown.Item style={{fontSize:"15px"}} eventKey="Rheumatologist">Rheumatologist</Dropdown.Item>
							<Dropdown.Item style={{fontSize:"15px"}} eventKey="Pediatrician">Pediatrician</Dropdown.Item>
							<Dropdown.Item style={{fontSize:"15px"}} eventKey="General Physician">General Physician</Dropdown.Item>

						</DropdownButton>

					</Form.Group>

					<Button type="submit">Submit</Button>
				</Form>
			</div>
			<div>
				{results &&
					results.map((elem) => {
						return (
							<>
							{/* <ul>
								<li style={{ marginLeft: "50vw" }}>
									<img
										style={{ height: "100px" }}
										src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
										alt="doctor img"
									/>
								</li>
								<li style={{ marginLeft: "50vw" }}>
									Name : {elem.doctorName}
								</li>
								<li style={{ marginLeft: "50vw" }}>
									Address : {elem.address}
								</li>
								<li style={{ marginLeft: "50vw" }}>
									Fees : {elem.fees}
								</li>
								<li style={{ marginLeft: "50vw" }}>
									Speciality : {elem.speciality}
								</li>
								<li style={{ marginLeft: "50vw" }}>
									Ph. No. : {elem.phoneNumber}
								</li>
							</ul> */}

							<Card style={{ width: '40rem', marginLeft:"30vw" }}>
							<Card.Body className="d-flex">
								<div>
							  <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" width={100}/>
							  </div>
							  <div>
							  <Card.Title>{elem.doctorName}</Card.Title>
							  <Card.Text>Address : {elem.address}</Card.Text>
							  <Card.Text>Fees : {elem.fees}</Card.Text>
							  <Card.Text>Phone number : {elem.phoneNumber}</Card.Text>
							  <Card.Text>Speciality : {elem.speciality}</Card.Text>
							  <Button variant="success"><IoIosNavigate style={{fontSize:"30px", margin:"5px"}}/></Button>
							  </div>
							</Card.Body>
						  </Card>
						  </>
						);
					})}
			</div>
		</>
	);
};

export default Search;
