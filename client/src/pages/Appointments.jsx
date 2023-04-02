import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Appointments = () => {
    return (
        <>
            <h1>Appointments Page</h1>
            <p>"appointments": 
        "doctorName": "string",
        "phoneNumber": "number",
        "address": "string",
        "startTime": "time",
        "date": "date",
        "endTime": "time"
      </p>
            <Form>
                <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
                    <Form.Label>Doctor Ph.no</Form.Label>
                    <Form.Control type="tel" placeholder="Enter number" />
                </Form.Group>

                <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <textarea></textarea>
                </Form.Group>

                <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type='datetime-local' placeholder='Time'/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    )
}
export default Appointments;