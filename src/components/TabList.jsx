import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios';
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { Redirect } from "react-router-dom";



   
const TabList = () =>{

  const[countries,setCountries] = useState([]);
   const[search,setSearch] = useState("");
   const[filteredCountries,setFilteredCountries] = useState([]);


   const getCountries = async ()=>{
    try{
        const response = await axios.get("https://restcountries.com/v2/all");
        setCountries(response.data);
        setFilteredCountries(response.data);
    }
    catch(error){
        console.log(error);
    }
   }

   const columns = [
    {
        name:"Crocin",
        freq:"Daily",
        time:["morning","evening"],
        // selector: row => row.name,
        // sector: row => row.nativeName,
        
    },
    {
      name:"Norflox",
      freq:"Daily",
      time:["morning","evening"],
        // selector: row => row.name,
        // sector: row => row.nativeName,
        // sortable:true,
    },
    {
      name:"Becousule",
      freq:"Daily",
      time:["morning","evening"],
        // sector: row => row.capital,
    },
    {
      name:"Becousule",
      freq:"Daily",
      time:["morning","evening"],
        // sector: row => row.capital,
    },
    
    
]





    return (
        <>
        <div id="tab-list" className="dash-component"> 

          <legend align="left">Tablet List</legend>


          <table>
            <tr>
              <th>Name</th>
              <th>Frequency</th>
              <th>Time</th>
            </tr>
            {columns.map((val, key) => {
              return (
                <tr key={key}>
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