import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../components/searchsidebar.css";
import axios from "axios";

const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [filters, setFilters] = useState("");
	const [results, setResults] = useState(null);
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(1000);
	const [value, setValue] = useState(null);
	const [flag, setFlag] = useState(0);
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [list, setList] = useState({});

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
			distance: Number(value),
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
				setList(response.data);
				console.log(
					".....................midbreak....................................."
				);
				console.log(response.data[0].speciality);

				if (value) {
					let tempList = response.data.filter(
						(doctor) => doctor.speciality === filters
					);
					setList(tempList);
				}
				console.log(list);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className="sidebar">
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Control
							type="text"
							name="searchQuery"
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</Form.Group>
					<Form.Group>
						<label htmlFor="distanceSlider">
							Distance (in miles): {value}
						</label>
						<Form.Control
							type="range"
							name="distanceSlider"
							min={min}
							max={max}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</Form.Group>
					<Form.Group>
						<label>Category:</label>
						<select
							name="category"
							value={filters}
							onChange={(e) => setFilters(e.target.value)}
						>
							<option value="Cardiologist">Cardiologist</option>
							<option value="Rheumatologist">
								Rheumatologist
							</option>
							<option value="Pediatrician">Pediatrician</option>
							<option value="General Physician">
								General Physician
							</option>
						</select>
					</Form.Group>

					<Button type="submit">Submit</Button>
				</Form>
			</div>
			<div>
				{results &&
					results.map((elem) => {
						return (
							<ul>
								<li style={{ marginLeft: "50vw" }}>
									<img
										style={{ height: "100px" }}
										src={elem.avatar}
									/>
								</li>
								<li style={{ marginLeft: "50vw" }}>
									{elem.first_name}
								</li>
								<li style={{ marginLeft: "50vw" }}>
									{elem.last_name}
								</li>
							</ul>
						);
					})}
			</div>
		</>
	);
};

export default Search;
