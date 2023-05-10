import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../../pages/tabletManager.css'

const AddAppointmentModal = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    props.handleSubmit(e);
    handleClose();
  }


  return (
    <>
      <div id='modal-container' style={{ marginRight: "5px", marginTop:"15px" }}>
        <Button id='add-medicine-button' onClick={handleShow}>
          Add Appointment
        </Button>

        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Appointment details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
						<Form.Group className="mb-3 " controlId="doctorName">
							<Form.Label>Doctor Name</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter name"
								onChange={(e) => props.setDoctorName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="doctorNumber">
							<Form.Label>Doctor Ph.no</Form.Label>
							<Form.Control
								type="tel"
								placeholder="Enter number"
								onChange={(e) =>
									props.setDoctorNumber(e.target.value)
								}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="doctorAddress">
							<Form.Label>Address</Form.Label>
							<textarea
								placeholder="Enter address"
								onChange={(e) =>
									props.setDoctorAddress(e.target.value)
								}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="notes">
							<Form.Label>Notes</Form.Label>
							<textarea
								placeholder="Enter notes"
								onChange={(e) => props.setNotes(e.target.value)}
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
									props.setAppointmentDateAndTime(
										new Date(e.target.value)
									)
								}
							/>
						</Form.Group>

						
					</Form>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AddAppointmentModal;
