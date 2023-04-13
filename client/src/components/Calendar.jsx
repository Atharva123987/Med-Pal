import React, { useState, useEffect } from 'react';
import Calendar1 from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {GrCaretNext} from 'react-icons/gr'
import {GrCaretPrevious} from 'react-icons/gr'
import {TbPlayerTrackPrev} from 'react-icons/tb'
import {TbPlayerTrackNext} from 'react-icons/tb'
import './calendar.css'
const Calendar = ({ appointments }) =>{

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [appointments]);

  const findAppointments = (date) => {
    return appointments.filter((appointment) =>
      isSameDay(appointment.timeAndDate, date)
    );
  };

  const isSameDay = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  const tileContent = ({ date }) => {
    const matchingAppointments = findAppointments(date);
    if (matchingAppointments.length > 0) {
      return (
        <div>
          {matchingAppointments.map((appointment, index) => (
            <div
              key={index}
              onClick={() => {
                // alert(
                //   `Doctor: ${appointment.doctorName}\nPhone: ${appointment.phoneNumber}\nDate: ${appointment.timeAndDate}\nAddress: ${appointment.address}\nNotes: ${appointment.notes}`
                // );
              }}
              style={{ cursor: "pointer" }}
            >
              {appointment.doctorName}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  if (loading || appointments === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
   
   <Calendar1
  onChange={(date) => setSelectedDate(date.toISOString())}
  value={new Date(selectedDate)}
  tileContent={tileContent}
  nextLabel={<GrCaretNext />}
  prevLabel={<GrCaretPrevious />}
  prev2Label={<TbPlayerTrackPrev />}
  next2Label={<TbPlayerTrackNext />}
  style={{
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    padding: "10px"
  }}
/>

      <ListGroup>
        {findAppointments(selectedDate).map((appointment, index) => (
          <ListGroup.Item key={index}>
            <div>Doctor: {appointment.doctorName}</div>
            <div>Phone: {appointment.phoneNumber}</div>
            <div>Date: {appointment.timeAndDate}</div>
            <div>Address: {appointment.address}</div>
            <div>Notes: {appointment.notes}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Calendar;
