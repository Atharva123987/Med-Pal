import {useState} from 'react';
import "./dashboard-item.css";
const DashboardItem = () => {
  const taskName = useState("Hello");
  
    return (
      <>
      
      <div id="component-name" className="dash-component"> {/* <== Change id of the div to the name of component  */}
      <fieldset>
        <legend align="left">Component heading</legend>

        {/* <-- Add component specific info here --> */}
        
        <button className='dash-button'>+</button>
      </fieldset>
      </div>
      </>
    )
  };
  
  export default DashboardItem;