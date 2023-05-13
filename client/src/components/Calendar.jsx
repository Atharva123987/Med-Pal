import React, { useState, useEffect } from 'react';
import Calendar1 from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Button, CloseButton } from 'react-bootstrap';
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
import LoadingCircle from './SkeletonLoaders/LoadingCircle';
import { Link } from 'react-router-dom';

const Calendar = (props) => {

  const { user } = useAuthContext();
  const {showList} = props
  const appointments = props.appointments;
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString());
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false)
  const [deleteID, setDeleteID] = useState(null)
  const [hideList, setHideList] = useState(false)
  



  useEffect(()=>{
    if(deleteID !== null)handleDelete();
  },[deleteID])

  if(!appointments){
    return(
      <LoadingCircle/>
    )
  }

  const handleDelete = async () => {
    if(!deleteID)return 
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
    return appointments?.filter((appointment) =>
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
    if (matchingAppointments?.length > 0) {
      return (
        <div onClick={() => handleTileClick(date)}>
          <GiHospitalCross id='appointment-indicator' />
        </div>
      );
    }
    return null;
  };

  const handleTileClick = (date) => {
  setClicked((prevState) => !prevState);
  setHideList((prevState) => !prevState);
  setSelectedDate(date.toISOString());
};

  

 

  return (
    <>
        <Calendar1
          id='calendar-main'
          onChange={(date) => setSelectedDate(date.toISOString())}
          tileHeight={100}
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
      {
        hideList&& !showList && <>
          <div id='appointments-list-dashboard'>
       
       <div className='d-flex justify-content-between'>
       
       <h4 className='m-3'>Appointment Details</h4>
       <CloseButton variant='white' onClick={handleTileClick} className='dash-button'></CloseButton >
       
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
                   
                 </ListGroup.Item>
               </>
             ))}
           </ListGroup>
         ) : (
           <p id='no-appointments'>No appointments available</p>
         )}
       </div>
       
     </div>
        </>
      }

    </>
  );

}

export default Calendar;
