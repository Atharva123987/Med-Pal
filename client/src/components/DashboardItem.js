import {useState} from 'react';
import "./dashboard-item.css";
import TabList from './TabList';
const DashboardItem = () => {
    
    return (
      <>
      <div id="component-name" className="dash-component"> {/* <== Change id of the div to the name of component  */}
      <fieldset>
        <legend align="left">Tablet List</legend>
        
        {/* <-- Add component specific info here --> */}
       
        <button className='dash-button'><span>+</span></button>
      </fieldset>
      </div>
      </>
    )
  };
  
  export default DashboardItem;