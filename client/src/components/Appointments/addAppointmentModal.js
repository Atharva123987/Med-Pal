import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AiFillPlusCircle } from "react-icons/ai";
import "../../pages/tabletManager.css";
import axios from "axios";


const AddAppointmentModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false)  }
  const handleShow = () => setShow(true);

  const [doctorName, setDoctorName] = useState(null);
	const [doctorNumber, setDoctorNumber] = useState(null);
	const [doctorAddress, setDoctorAddress] = useState(null);
	const [notes, setNotes] = useState(null);
	const [appointmentDateAndTime, setAppointmentDateAndTime] = useState(null);
	const [fetchedData, setFetchedData] = useState(null);
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

  return (
    <>
      
      <div
        id="modal-container"
        style={{ marginRight: "5px", marginLeft: "auto" }}
      >
        <Button variant="primary" onClick={handleShow}>
        Add Appointment
      </Button>
        {/* <Button id="add-medicine-button" onClick={handleShow}>
          Add Medicine
        </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Medicine details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                  onChange={(e) => setDoctorNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="doctorAddress">
                <Form.Label>Address</Form.Label>
                <textarea
                  placeholder="Enter address"
                  onChange={(e) => setDoctorAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="notes">
                <Form.Label>Notes</Form.Label>
                <textarea
                  placeholder="Enter notes"
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="appointmentTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  placeholder="Time"
                  onChange={(e) =>
                    setAppointmentDateAndTime(new Date(e.target.value))
                  }
                />
              </Form.Group>

              {/* <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button> */}
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button
              id="add-value"
              className="bg-dark d-flex"
              onClick={handleSubmit}
            >
            SAVE
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AddAppointmentModal;
