import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import Toast from 'react-bootstrap/Toast';
import AllMedicinesTable from '../components/Medicines/AllMedicinesTable';
import AddMedicineModal from '../components/Medicines/AddMedicineModal';
import NavBar from '../components/Navbar'
import './tabletManager.css'
import {ImClock} from 'react-icons/im'
const TabletManager = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [expiry, setExpiry] = useState(new Date());
  const [dosageEnd, setDosageEnd] = useState(new Date());
  const [frequency, setFrequency] = useState(null);
  const checkboxesRef = useRef([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [nameError, setNameError] = useState(false)
  const [flag, setFlag] = useState(0);
  const isMountedRef = useRef(false);


  useEffect(() => {
      handleFetch();
  }, [flag])

  const handleFetch = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/medicines`
      );
      setFetchedData(response.data);
    
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    // MAKE POST REQUEST HERE
    e.preventDefault();
    // console.log(selectedFile)
    const checkedValues = checkboxesRef.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    var timeOfDay = [];
    checkboxesRef.current.forEach((checkbox, i) => {
      timeOfDay.push(checkbox.checked);
    });

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
          setShowToast(true)
          setFlag(!flag)
        }
      })
      .catch((error) => {
        // alert(error);
        setNameError(true);
      });
  };

  return (
    <>
      <NavBar />

      <h1>Tab manager</h1>

      <AddMedicineModal
        setName={setName}
        setQuantity={setQuantity}
        setExpiry={setExpiry}
        setFrequency={setFrequency}
        checkboxesRef={checkboxesRef}
        handleSubmit={handleSubmit} />

      <div id='toasts' style={{ position: "fixed", zIndex: "10", top: "3%", right: "3%" }}>

        <Toast onClose={() => { setShowToast(false) }} bg='success' position='middle-center' show={showToast} delay={3000} autohide style={{ position: "relative", zIndex: "10" }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-success">Tablet Added!</strong>
            <small>{frequency?.charAt(0).toUpperCase() + frequency?.slice(1)}</small>
          </Toast.Header>
          <Toast.Body className='text-white'>Name : {name} | Quantity : {quantity}</Toast.Body>
        </Toast>

        <Toast onClose={() => { setNameError(false) }} bg='danger' position='middle-center' show={nameError} delay={2000} autohide style={{ position: "relative", zIndex: "10" }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-danger">Enter Valid Name!</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>Tablet name should be unique</Toast.Body>
        </Toast>
      </div>

      <div className='d-flex flex-row justify-content-evenly'>

        <div style={{width:"35vw"}}>
          <h4>Upcoming Dose</h4>
          <ul>
            <li>
              <div className='d-flex flex-row justify-content-evenly m-3'>
              <p style={{margin:"auto 0"}}>Crocin</p>  
              <span style={{fontSize:"15px"}}><ImClock/></span>
              <b>12:00pm</b>
              </div>
              </li>
            <li>
              <div className='d-flex flex-row justify-content-evenly m-3'>
              <p style={{margin:"auto 0"}}>Crocin</p>  
              <span style={{fontSize:"15px"}}><ImClock/></span>
              <b>12:00pm</b>
              </div>
              </li>
            <li>
              <div className='d-flex flex-row justify-content-evenly m-3'>
              <p style={{margin:"auto 0"}}>Crocin</p>  
              <span style={{fontSize:"15px"}}><ImClock/></span>
              <b>12:00pm</b>
              </div>
              </li>
            
          </ul>
        </div>

        <div style={{ height: "80vh", overflow: "scroll" }}>
          <AllMedicinesTable fetchedData={fetchedData} />
        </div>

      </div >
    </>
  );
};




export default TabletManager;
