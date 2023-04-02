import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const Appointments = () => {

    const [doctorName, setDoctorName] = useState(null);
    const [doctorNumber, setDoctorNumber] = useState(null);
    const [doctorAddress, setDoctorAddress] = useState(null);
    const [appointmentDateAndTime, setAppointmentDateAndTime] = useState(null);
    const [fetchedData, setFetchedData] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // !!!HANDLE POST REQUST HERE
        console.log("Sent Data :",{doctorName,doctorNumber,doctorAddress,appointmentDateAndTime})
    }

    const handleFetch = async (e)=>{
        // !!!HANDLE GET REQUEST HERE
        try{
            const response = await axios.get(`https://random-data-api.com/api/v2/users?size=5`)
            setFetchedData(response.data)
            console.log("Fetched Data :",response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <h1>Appointments Page</h1>
            <div className='d-flex justify-content-evenly'>
                <Form>
                    <Form.Group className="mb-3 " controlId="doctorName">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter name" onChange={(e) => setDoctorName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="doctorNumber">
                        <Form.Label>Doctor Ph.no</Form.Label>
                        <Form.Control type="tel" placeholder="Enter number" onChange={(e) => setDoctorNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="doctorAddress">
                        <Form.Label>Address</Form.Label>
                        <textarea placeholder='Enter address' onChange={(e) => setDoctorAddress(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="appointmentTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type='datetime-local' placeholder='Time' onChange={(e) => setAppointmentDateAndTime(new Date(e.target.value))} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
                <div className='ml-5'>
                    <h2>Fetch Appointments and Doctor details</h2>
                    <button className='btn btn-primary' onClick={handleFetch}>Fetch Appointements</button>
                    <ol>
                        {fetchedData && fetchedData.map((element,i)=>{
                        return(<li key={i}>
                            <ul>
                                <li key={element.first_name}>{element.first_name}</li>
                                <li key={element.phone_number}>{element.phone_number}</li>
                                <li key={element.address.street_name}>{element.address.street_name}</li>
                                <li key={element.date_of_birth}>{element.date_of_birth}</li>
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
export default Appointments;