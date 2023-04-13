import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addAppointment = () => {
    setAppointments([...appointments, { date: new Date(selectedDate) }]);
  };

  const findAppointments = (date) => {
    return appointments.filter((appointment) =>
      isSameDay(appointment.date, date)
    );
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const tileContent = ({ date }) => {
    const matchingAppointments = findAppointments(date);
    if (matchingAppointments.length > 0) {
      return (
        <div className="text-danger">
          {matchingAppointments.length} appointment(s)
        </div>
      );
    }
    return null;
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <h4>Select Appointment Date:</h4>
          <Calendar
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
            tileContent={tileContent}
          />
          <button className="btn btn-primary mt-3" onClick={addAppointment}>
            Add Appointment
          </button>
        </Col>
        <Col md={8}>
          <h4>Appointments on {selectedDate.toDateString()}:</h4>
          <ListGroup>
            {findAppointments(selectedDate).map((appointment, index) => (
              <ListGroup.Item key={index}>
                {appointment.date.toLocaleString()}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
