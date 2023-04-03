import { useEffect, useState } from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Admin = () => {
    const [doctorName, setDoctorName] = useState('')
    const [speciality, setSpeciality] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [clinicOrHospita1Name, setClinicOrHospitalName] = useState('')
    const [address, setAddress] = useState('')
    const [fees, setFees] = useState(0)
    const [fetchedData, setFetchedData] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(
                doctorName, 
                speciality, 
                phoneNumber, 
                clinicOrHospita1Name, 
                address, 
                fees
            )
    }

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://random-data-api.com/api/v2/users?size=5`)
            setFetchedData(response.data)
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            <h1>Admin Page for Doctors</h1>
            <div className='d-flex justify-content-evenly'>
                <Form>
                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setDoctorName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Speciality</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setSpeciality(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Clinic Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setClinicOrHospitalName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Address</Form.Label>
                        <textarea type="textarea" placeholder="Enter name" onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Fees</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setFees(e.target.value)} />
                    </Form.Group>
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </Form>
                <div>
                    <button className="btn btn-primary" onClick={fetchData}>Fetch Data</button>
                    <ol style={{height:"80vh",overflowY:"scroll"}}>
                        {fetchedData && fetchedData.map((element, i) => {
                            return (<li key={i}>
                                <ul>
                                    <li key={element.first_name}>{element.first_name}</li>
                                    <li key={element.last_name}>{element.last_name}</li>
                                    <li key={element.phone_number}>{element.phone_number}</li>
                                    <li key={element.employment.title}>{element.employment.title}</li>
                                    <li key={element.address.street_address}>{element.address.street_address}</li>
                                    <li key={element.id}>{element.id}</li>
                                </ul>
                            </li>);
                        })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}
export default Admin;