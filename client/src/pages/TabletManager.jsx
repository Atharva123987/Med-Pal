import Form from 'react-bootstrap/Form';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import Toast from 'react-bootstrap/Toast';
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

	const handleSubmit = async (e) => {
		// MAKE POST REQUEST HERE
		e.preventDefault();
    setShow(true)
		const checkedValues = checkboxesRef.current
			.filter((checkbox) => checkbox.checked)
			.map((checkbox) => checkbox.value);
		var timeOfDay = [];
		checkboxesRef.current.forEach((checkbox, i) => {
			timeOfDay.push(checkbox.checked);
		});
		console.log("HERRE",timeOfDay);

		const axios = require("axios");
		let data = JSON.stringify({
			name: name,
			quantity: quantity,
			expiry: expiry,
			frequency: frequency,
			timeOfDay: {
				morning: {
					yesOrNot: true,
					beforeFood: true,
				},
				afternoon: {
					yesOrNot: true,
					beforeFood: true,
				},
				evening: {
					yesOrNot: true,
					beforeFood: true,
				},
				night: {
					yesOrNot: true,
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
				alert("Tablet added successfully");
			})
			.catch((error) => {
				alert(error);
			});
	};

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

		// email, gender, id, username, password,address
	};

  return (
    <>
        <Toast onClose={() => setShow(false)} bg='light' position='middle-center' show={show} delay={3000} autohide style={{position:"fixed",zIndex:"10",top:"3%", right:"3%"}}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Tablet Added!</strong>
            <small>{frequency?.charAt(0).toUpperCase() + frequency?.slice(1)}</small>
          </Toast.Header>
          <Toast.Body>{name} | Quantity : {quantity}</Toast.Body>
        </Toast>
     
      <h1>Tab manager</h1>

      <div className='d-flex flex-row justify-content-start'>
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
            <Form.Label>Tablet Name</Form.Label>
            <Form.Control type="email" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
            <Form.Label>Tablet Quantity</Form.Label>
            <Form.Control type="number" placeholder="10" onChange={(e) =>
              setQuantity(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
            <Form.Label>Tablet Expiry</Form.Label>
            <Form.Control type="date" placeholder="10" onChange={(e) => setExpiry(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
            <Form.Label>Tablet Frequency</Form.Label>
            <br></br>
            <label htmlFor='daily'>Daily</label>
            <input type="radio" name='frequency' value='daily' onChange={(e) => {
              setFrequency(e.target.value)
            }} />
            <br></br>
            <label htmlFor='weekly'>Weekly</label>
            <input type="radio" name='frequency' value='weekly' onChange={(e) => {
              setFrequency(e.target.value)
            }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}/>
            <Form.Label>Tablet TimeOfDay</Form.Label>
            <br></br>
            <label htmlFor='morning'>Morning</label>
            <input type="checkbox" placeholder="name@example.com" name='timeOfDay' value='morning' ref={(el) => (checkboxesRef.current[0] = el)} />
            <label htmlFor='afternoon'>Afternoon</label>
            <input type="checkbox" placeholder="name@example.com" name='timeOfDay' value='afternoon' ref={(el) => (checkboxesRef.current[1] = el)} />
            <label htmlFor='evening'>Evening</label>
            <input type="checkbox" placeholder="name@example.com" name='timeOfDay' value='evening' ref={(el) => (checkboxesRef.current[2] = el)} />
            <label htmlFor='night'>Night</label>
            <input type="checkbox" placeholder="name@example.com" name='timeOfDay' value='night' ref={(el) => (checkboxesRef.current[3] = el)} />

					<Form.Label>Upload Prescription</Form.Label>
					<Form.Control
						type="file"
						style={{ width: "300px" }}
						onChange={(e) => setSelectedFile(e.target.files[0])}
					/>
					<button className="btn btn-primary " onClick={handleSubmit}>
						Add Tablet
					</button>
				</Form>
				<ol>
					<button className="btn btn-primary" onClick={handleFetch}>
						Fetch Tablets
					</button>
					{fetchedData &&
						fetchedData.map((element, idx) => {
							return (
								<>
									<li>
										<ul>
											<li>Tablet name: {element.name}</li>
											<li>
												Tablet quantity:{" "}
												{element.quantity}
											</li>
											<li>
												Tablet expiry: {element.expiry}
											</li>
											<li>
												Tablet frequency:{" "}
												{element.frequency}
											</li>
											<li>
												Tablet timeOfDay:
												{Object.keys(
													element.timeOfDay
												).map((key) => (
													<span>{key}, </span>
												))}
											</li>
											{/* <li>Tablet dosageEndDate: {element.password}</li>
                      <li>Prescription: {element.id}</li> */}
										</ul>
									</li>
									<br />
								</>
							);
						})}
				</ol>
			</div>
		</>
	);
};

export default TabletManager;
