import { useState, useEffect } from "react";




   
const TabList = () =>{

   

   const columns = [
    {
        name:"Crocin",
        freq:"Daily",
        time:["morning","evening"],
    },
    {
      name:"Norflox",
      freq:"Daily",
      time:["morning","evening"],
    },
    {
      name:"Becousule",
      freq:"Daily",
      time:["morning","evening"],
    },
    {
      name:"Becousule",
      freq:"Daily",
      time:["morning"],
    },
    
    
]
  const [checked,setChecked] = useState(false);
  const handleChange= (e)=>{
    setChecked(!checked)
    console.log(checked)
  }

    return (
        <>
        <div id="tab-list" className="dash-component"> 

          <legend align="left">Tablet List</legend>

          <table>
            <tr>
              <th><input type="checkbox" onChange={handleChange}></input></th>
              <th>Name</th>
              <th>Frequency</th>
              <th>Time</th>
            </tr> 
            {columns.map((val, key) => {
              return (
                <tr key={key}>
                  <td><input type="checkbox"></input></td>
                  <td>{val.name}</td>
                  <td>{val.freq}</td>
                  <td>{val.time.map((elem,i,time)=> time[i] + ", ")}</td>
                </tr>
              )
        })}
      </table>
          <div className="dash-button-container">
          <button className='dash-button'><span>+</span></button>
          </div>
        </div>
        </>
      )
}
export default TabList;