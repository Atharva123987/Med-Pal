import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import "../components/searchsidebar.css";
import axios from "axios";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./search.css";
import Card from "react-bootstrap/Card";
import { IoIosNavigate } from "react-icons/io";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";
import { AiFillUpCircle } from "react-icons/ai";
import Sidenav from '../components/Sidenav'
import Footer from '../components/Footer'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState("");
  const [results, setResults] = useState(null);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1000);
  const [distanceValue, setDistanceValue] = useState(500);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const { user } = useAuthContext();

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
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://medpal-backend.onrender.com/api/doctors/nearby",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      data: newData,
    };

    await axios
      .request(config)
      .then((response) => {
        if(response.data.length == 0) {
          setResults([]);
        }
        else 
          setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      				<Navbar buttons='true' LogButton='true' />

        <div className="page-container">
        <Sidenav/>

        <div style={{width:"100%"}}>
      <div className="sidebar">
        <h4>Search Doctors Nearby</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group >
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

          <Form.Group className="distance-slider">
            <label>Category:</label>
            <DropdownButton
              title={`${filters ? filters : "All"}`}
              onSelect={(e) => setFilters(e)}
            >
              <Dropdown.Item style={{ fontSize: "15px" }} eventKey="">
                All
              </Dropdown.Item>
              <Dropdown.Item
                style={{ fontSize: "15px" }}
                eventKey="Cardiologist"
              >
                Cardiologist
              </Dropdown.Item>
              <Dropdown.Item
                style={{ fontSize: "15px" }}
                eventKey="Rheumatologist"
              >
                Rheumatologist
              </Dropdown.Item>
              <Dropdown.Item
                style={{ fontSize: "15px" }}
                eventKey="Pediatrician"
              >
                Pediatrician
              </Dropdown.Item>
              <Dropdown.Item
                style={{ fontSize: "15px" }}
                eventKey="General Physician"
              >
                General Physician
              </Dropdown.Item>
            </DropdownButton>
          </Form.Group>

          <Button type="submit">Search</Button>
        </Form>
        <div className="d-flex flex-column search-container">
          {results ? results.length > 0 ? 
            results.map((elem,id) => {
              return (
                  <Card key={id}>
                    <Card.Body className="d-flex">
                      <div>
                        <img
                          src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                          alt="img"
                          id='doctor-image'
                          width={100}
                        />
                      </div>
                      <div className="mx-5">
                        <Card.Title>{elem.doctorName}</Card.Title>
                        <Card.Title>
                          Clinic name : {elem.clinicOrHospitalName}
                        </Card.Title>
                        <Card.Text>
                          Address : {elem.city}, {elem.district}, {elem.state}
                        </Card.Text>

                        <Card.Text>Fees : {elem.fees}</Card.Text>
                        <Card.Text>Phone number : {elem.phoneNumber}</Card.Text>
                        <Card.Text>Speciality : {elem.speciality}</Card.Text>
                        <Button variant="success">
                          <IoIosNavigate
                            style={{
                              fontSize: "",
                              margin: "5px",
                            }}
                          />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
              )
            }) : <p style={{ fontSize: "25px" }}>No Doctors Found!</p>
          : <p style={{ fontSize: "25px" }}>Set search parameters to search<AiFillUpCircle/></p>
          }
        </div>
        </div>
        <Footer/>
      </div>
      </div>
    </>
  );
};

export default Search;
