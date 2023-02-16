import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios';
import { setSelectionRange } from "@testing-library/user-event/dist/utils";



   
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
        name:"Tablet Name",
        selector: row => row.name,
        sector: row => row.nativeName,
        
    },
    {
        name:"Stock",
        selector: row => row.name,
        sector: row => row.nativeName,
        sortable:true,
    },
    {
        name:"Expiry",
        sector: row => row.capital,
    },
    {
        name:"Action",
        cell: row => <button className="btn btn-primary" onClick={()=>alert("Here")}>Edit</button>
    }
]


   useEffect(()=>{
    getCountries();
   },[])

   useEffect(()=>{
    const result = countries.filter(country => {
        return country.name.toLowerCase().match(search.toLowerCase());
   });
   setFilteredCountries(result);
   },[search])





    return (
        <>
        <div id="component-name" className="dash-component"> 

        <fieldset>
          <legend align="left">Tablet List</legend>

          <DataTable
          title='Tablet List'
          columns={columns}
          data={filteredCountries}
          fixedHeader
          fixedHeaderScrollHeight="200px"
          selectableRows
          selectableRowsHighlight
          // pagination
          highlightOnHover
          actions={
            <button className="btn btn-info btn-sm "></button>
          }
          subHeader
          subHeaderComponent={
            <input 
            type='text' 
            placeholder="Search Here" 
            className="w-25 form-control"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            />
          }
          subHeaderAlign="left"
          />
          
          <button className='dash-button'><span>+</span></button>
        </fieldset>
        
        </div>
        </>
      )
}
export default TabList;