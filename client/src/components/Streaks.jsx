import { Button } from "react-bootstrap";
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {AiFillDownCircle} from 'react-icons/ai'
import { useState } from "react";

const Streaks = () =>{

    const [streakNumber, setStreakNumber] = useState(4);

    

    return (
     
        <div id="streaks-container" className="dash-component d-flex flex-column justify-content-start  "> 

          
          
            <h5>Current streak : <span style={{color:"green"}}>{streakNumber}</span></h5>
          <p>Click here if you took your medicine today <AiFillDownCircle/></p>
          <Button variant='success'><BsFillPlusCircleFill/></Button>

        </div>
      )
}
export default Streaks;