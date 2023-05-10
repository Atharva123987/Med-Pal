import { Button } from "react-bootstrap";
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {AiFillDownCircle} from 'react-icons/ai'
import { useState } from "react";
const Streaks = () =>{

    const [streakNumber, setStreakNumber] = useState(4);

    

    return (
        <>
          <legend align="center">Streaks</legend>
        <div id="streaks-container" className="dash-component d-flex flex-column justify-content-start  "> {/* <== Change id of the div to the name of component  */}

          
          <div>
            <h5>Current streak : <span style={{color:"green"}}>{streakNumber}</span></h5>
          </div>
          <p>Click here if you took your medicine today <AiFillDownCircle/></p>
          <Button variant='success'><BsFillPlusCircleFill/></Button>

          
        </div>
        </>
      )
}
export default Streaks;