import Form from 'react-bootstrap/Form';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
const TabletManager = () => {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1);
  const [expiry, setExpiry] = useState(new Date());
  const [dosageEnd, setDosageEnd] = useState(new Date());
  const [frequency, setFrequency] = useState('daily')
  const timeOfDay = useRef([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);

  const handleSubmit = async (e) => {
    // MAKE POST REQUEST HERE
    e.preventDefault();
    const checkedValues = timeOfDay.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    // console.log("Tablet name :", name);
    // console.log("Tablet quantity :", quantity);
    // console.log("Tablet expiry :", expiry);
    // console.log("Tablet dosageEnd :", dosageEnd)
    // console.log("Tablet frequency :", frequency);
    // console.log("Time of Day :")
    // timeOfDay.current.forEach((checkbox, i) => {
    //   console.log(`${i + 1}.`, (checkbox.value), (checkbox.checked));
    // });
    // console.log(selectedFile);
  }

  const handleFetch = async (e) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/medicines`);
      setFetchedData(response.data)
      console.log(response.data[0])
    }
    catch (err) {
      console.log(err)
    }


    // email, gender, id, username, password,address 
  }

  return (
    <>
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
            <Form.Label>Tablet TimeOfDay</Form.Label>
            <br></br>
            <label htmlFor='morning'>Morning</label>
            <input type="checkbox" placeholder="name@example.com" name='timeOfDay' value='morning' ref={(el) => (timeOfDay.current[0] = el)} />
            <label htmlFor='afternoon'>Afternoon</label>
            <input type="checkbox" placeholder="name@example.com" name='timeOfDay' value='afternoon' ref={(el) => (timeOfDay.current[1] = el)} />
            <label htmlFor='evening'>Evening</label>
            <input type="checkbox" placeholder="name@example.com" name='timeOfDay' value='evening' ref={(el) => (timeOfDay.current[2] = el)} />
            <label htmlFor='night'>Night</label>
            <input type="checkbox" placeholder="name@example.com" name='timeOfDay' value='night' ref={(el) => (timeOfDay.current[3] = el)} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ width: "300px" }}>
            <Form.Label>Tablet Dosage End Date</Form.Label>
            <Form.Control type="date" placeholder="name@example.com" onChange={(e) => setDosageEnd(e.target.value)} />
          </Form.Group>

          <Form.Label>Upload Prescription</Form.Label>
          <Form.Control type="file" style={{ width: "300px" }} onChange={(e) => setSelectedFile(e.target.files[0])} />
          <button className='btn btn-primary ' onClick={handleSubmit}>Add Tablet</button>
        </Form>
        <ol>
          <button className='btn btn-primary' onClick={handleFetch}>Fetch Tablets</button>
          {
            fetchedData && fetchedData.map((element, idx) => {
              return (
                <>
                  <li>
                    <ul>
                      <li>Tablet name: {element.name}</li>
                      <li>Tablet quantity: {element.quantity}</li>
                      <li>Tablet expiry: {element.expiry}</li>
                      <li>Tablet frequency: {element.frequency}</li>
                      <li>Tablet timeOfDay:
                        {Object.keys(element.timeOfDay).map((key) => (
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
            })
          }


        </ol>
      </div>
    </>
  )
}

export default TabletManager;