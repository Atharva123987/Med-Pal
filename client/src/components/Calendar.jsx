import React, { useState, useEffect } from 'react';
import Calendar1 from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { GrCaretNext } from 'react-icons/gr'
import { GrCaretPrevious } from 'react-icons/gr'
import { TbPlayerTrackPrev } from 'react-icons/tb'
import { TbPlayerTrackNext } from 'react-icons/tb'
import { BsFillCalendarFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RiNurseLine } from 'react-icons/ri'
import { ImLocation2 } from 'react-icons/im'
import { MdNotes } from 'react-icons/md'
import { GiHospitalCross } from 'react-icons/gi'
import './calendar.css'
import AddAppointmentModal from './Appointments/AddAppointmentModal';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';

const Calendar = (props) => {
  const { user } = useAuthContext();
  const {showList} = props
  const appointments = props.appointments;
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false)
  const [deleteID, setDeleteID] = useState(null)
  useEffect(() => {
    setLoading(false);
  }, [appointments]);

  useEffect(()=>{
    handleDelete();
  },[deleteID])
  const handleDelete = async () => {

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `https://medpal-backend.onrender.com/api/appointments/${deleteID}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        props.handleFetch();
      })
      .catch((error) => {
        // props.handleFetch();
        console.log(error);
      });
  };

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
      setClicked(true)
      return (
        <div>
          <GiHospitalCross id='appointment-indicator' />
        </div>
      );
    }
    return null;
  };

  if (loading || appointments === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div id='calendar-container'>
        
        <Calendar1
          onChange={(date) => setSelectedDate(date.toISOString())}
          value={new Date(selectedDate)}
          tileContent={tileContent}
          nextLabel={<GrCaretNext />}
          prevLabel={<GrCaretPrevious />}
          prev2Label={<TbPlayerTrackPrev />}
          next2Label={<TbPlayerTrackNext />}
        />
         {showList &&
        <div id='appointments-list'>
       
          <div className='d-flex justify-content-between'>
          
          <h4 className='m-3'>Appointment Details</h4>
    
            <AddAppointmentModal setDoctorName={props.setDoctorName}
            setDoctorNumber={props.setDoctorNumber}
            setDoctorAddress={props.setDoctorAddress}
            setNotes={props.setNotes}
            setAppointmentDateAndTime={props.setAppointmentDateAndTime}
            handleSubmit={props.handleSubmit} />
              </div>
       
          
          <div id='appointments-list-box'>
            {clicked && findAppointments(selectedDate).length > 0 ? (
              <ListGroup>
                {findAppointments(selectedDate).map((appointment, index) => (
                  <>
                    
                    <ListGroup.Item key={index} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                      <div><RiNurseLine style={{ fontSize: "20px" }} />Dr. {appointment.doctorName}</div>
                      <div><BsFillTelephoneFill /> {appointment.phoneNumber}</div>
                      <div><BsFillCalendarFill /> {new Date(appointment.timeAndDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      <div><ImLocation2 /> {appointment.address}</div>
                      <div><MdNotes /> {appointment.notes}</div>
                      <Button className='w-25' variant='danger' onClick={(e) => {
                      setDeleteID(appointment?._id)
                    }
                    }
                    > <AiFillDelete /></Button>
                    </ListGroup.Item>
                  </>
                ))}
              </ListGroup>
            ) : (
              <p id='no-appointments'>No appointments available</p>
            )}
          </div>
          
        </div>
}
      </div>
    </>
  );

}

export default Calendar;
