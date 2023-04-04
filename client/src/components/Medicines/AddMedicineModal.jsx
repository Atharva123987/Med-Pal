import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddMedicineModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isDaily, setIsDaily] = useState(false)
    const handleSubmit = (e) => {
        props.handleSubmit(e);
        handleClose();
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Medicine
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Medicine details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
    <Form.Label>Medicine Name</Form.Label>
    <Form.Control type="text" placeholder="Name" onChange={(e) => props.setName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" style={{ width: "300px" }}>
    <Form.Label>Medicine Quantity</Form.Label>
    <Form.Control type="number" placeholder="Quantity" onChange={(e) => props.setQuantity(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput3" style={{ width: "300px" }}>
    <Form.Label>Medicine Expiry</Form.Label>
    <Form.Control type="date" placeholder="10-10-2023" onChange={(e) => props.setExpiry(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput4" style={{ width: "300px" }}>
    <Form.Label>Medicine Frequency</Form.Label>
    <br></br>
    <label htmlFor="daily">Daily</label>
    <input
      type="checkbox"
      name="frequency"
      value="daily"
      onChange={(e) => {
        props.setFrequency(e.target.value);
        setIsDaily(!isDaily);
      }}
    />

    <br></br>
    {isDaily && (
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput5" style={{ width: "300px" }}>
        <Form.Label>Tablet Time of Day</Form.Label>
        <div>
          <label htmlFor="morning">Morning</label>
          <input type="checkbox" placeholder="name@example.com" name="timeOfDay" value="morning" ref={(elem) => (props.checkboxesRef.current[0] = elem)} />
        </div>
        <div>
          <label htmlFor="afternoon">Afternoon</label>
          <input type="checkbox" placeholder="name@example.com" name="timeOfDay" value="afternoon" ref={(elem) => (props.checkboxesRef.current[1] = elem)} />
        </div>
        <div>
          <label htmlFor="evening">Evening</label>
          <input type="checkbox" placeholder="name@example.com" name="timeOfDay" value="evening" ref={(elem) => (props.checkboxesRef.current[2] = elem)} />
        </div>
        <div>
          <label htmlFor="night">Night</label>
          <input type="checkbox" placeholder="name@example.com" name="timeOfDay" value="night" ref={(elem) => (props.checkboxesRef.current[3] = elem)} />
        </div>
      </Form.Group>
    )}
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
        </>
    );
}

export default AddMedicineModal;
