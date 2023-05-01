import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AiFillPlusCircle } from 'react-icons/ai'
import '../../pages/tabletManager.css'

const AddMedicineModal = (props) => {

  const [show, setShow] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isDaily, setIsDaily] = useState(false)

  const handleClose = () => { setShow(false); setIsDaily(false);  }
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {

    if (props.error) handleClose();
    else {
      props.handleSubmit(e);
      handleClose();
    }

  }


  return (
    <>

      <div id='modal-container' style={{ marginRight: "5px", marginLeft: "auto" }}>
        <Button id='add-medicine-button' onClick={handleShow}>
          Add Medicine
        </Button>



        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Medicine details</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
                <Form.Label>Medicine Name</Form.Label>
                <Form.Control autoFocus type="text" placeholder="Name" onChange={(e) => props.setName(e.target.value)} />
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

                <Form.Check
                  type="switch"
                  id="custom-switch"
                  value='Daily'
                  onChange={(e) => {
                    props.setFrequency(e.target.value);
                    setIsDaily(!isDaily)
                  }}

                />

                <br></br>
                {isDaily && (
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput5" style={{ width: "300px" }}>
                    <Form.Label>Medicine Time of Day</Form.Label>

                    <div>
                      <Form.Check
                        inline
                        label="Morning"
                        name="group1"
                        type='checkbox'
                        id={`inline-checkbox`}
                        className='modal-checkbox'
                        ref={(elem) => (props.checkboxesRef.current[0] = elem)}
                      />

                      <Form.Check
                        inline
                        label="Afternoon"
                        name="group1"
                        type='checkbox'
                        id={`inline-checkbox`}
                        className='modal-checkbox'
                        ref={(elem) => (props.checkboxesRef.current[1] = elem)}
                      />
                      <Form.Check
                        inline
                        label="Evening"
                        name="group1"
                        type='checkbox'
                        id={`inline-checkbox`}
                        className='modal-checkbox'
                        ref={(elem) => (props.checkboxesRef.current[2] = elem)}
                      />
                      <Form.Check
                        inline
                        label="Night"
                        name="group1"
                        type='checkbox'
                        id={`inline-checkbox`}
                        className='modal-checkbox'
                        ref={(elem) => (props.checkboxesRef.current[3] = elem)}
                      />
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
           

            <Button id='add-value' className='bg-dark d-flex' onClick={handleSubmit}>
              <AiFillPlusCircle id="add-icon" />
            </Button>

          </Modal.Footer>
        </Modal>

      </div>
    </>
  );
}

export default AddMedicineModal;
