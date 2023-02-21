import React from 'react';
import  Calender1  from './Calendar/Calender1';
import './dashboard-item.css'
const Calendar = () =>{
    return (
        <>
        <div id="component-name" className="dash-component">
          <legend align="left">Calendar</legend>
          
          <Calender1/>
          <div className="dash-button-container">
          <button className='dash-button'><span>+</span></button>
          </div>
        </div>
        </>
      )
}
export default Calendar;