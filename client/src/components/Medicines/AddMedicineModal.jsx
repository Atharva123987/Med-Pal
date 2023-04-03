import React, { useEffect,useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddMedicineModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            <input type="checkbox" name='frequency' value='daily' onChange={(e) => {
                                setFrequency(e.target.value)
                            }} />
                            <br></br>

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMedicineModal;
