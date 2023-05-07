import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addAppointment = () => {
    setAppointments([...appointments, selectedDate]);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <h4>Select Appointment Date and Time:</h4>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="form-control"
          />
          <button className="btn btn-primary mt-3" onClick={addAppointment}>
            Add Appointment
          </button>
        </Col>
        {/* <Col md={8}>
          <h4>Appointments:</h4>
          <ListGroup>
            {appointments.map((appointment, index) => (
              <ListGroup.Item key={index}>
                {appointment.toLocaleString()}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col> */}
      </Row>
    </Container>
  );
}

export default App;
