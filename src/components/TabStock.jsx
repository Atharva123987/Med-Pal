import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios';
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const TabStock = () =>{

    // const [tabStore,setTabStore] = useState(
    //     [{
    //         "name" : "crocin",
    //         "quantity":3,
    //         "expiry":"2023-09-23",
    //     },
    //     {
    //         "name":"combiflam",
    //         "quantity":5,
    //         "expiry":"2023-05-12",
    //     },
    //     {
    //         "name":"norflox",
    //         "quantity":3,
    //         "expiry":"2023-12-20",
    //     }
    //     ]
    //     );
        
   const[countries,setCountries] = useState([]);
   const[search,setSearch] = useState("");
   const[filteredCountries,setFilteredCountries] = useState([]);

//AXIOS CODE
//    const getCountries = async ()=>{
//     try{
//         const response = await axios.get("https://restcountries.com/v2/all");
//         setCountries(response.data);
//         setFilteredCountries(response.data);
//     }
//     catch(error){
//         console.log(error);
//     }
//    }
const columns1 = [
    {
        name:"Tablet Name",
        expiryDate:"10-10-1000",
        selector: row => row.name,
        selector: row => row.nativeName,
        
    },
    {
        name:"Stock",
        expiryDate:"10-10-1000",
        selector: row => row.name,
        sector: row => row.nativeName,
        sortable:true,
    },
    {
        name:"Expiry",
        expiryDate:"10-10-1000",
        selector: row => row.capital,
    },
    {
        name:"Action",
        expiryDate:"10-10-1000",
        cell: row => <button className="btn btn-primary" onClick={()=>alert("Here")}>Edit</button>
    }
]

   const getCountries =  ()=>{
  
        
        setCountries(columns1);
        setFilteredCountries(columns1);
        // console.log(countries);
   }





   useEffect(()=>{
    getCountries();
   })

   useEffect(()=>{
    const result = countries.filter(country => {
        return country.name.toLowerCase().match(search.toLowerCase());
   });
   setFilteredCountries(result);
   },[search])

    return (
        <>
        <div id="component-name" className="dash-component"> {/* <== Change id of the div to the name of component  */}
        <fieldset>
          <legend align="left">Tablet Stock</legend>
           
          <DataTable
          title='Tablet List'
          columns={columns1}
          data={filteredCountries}
          fixedHeader
          fixedHeaderScrollHeight="200px"
          selectableRows
          selectableRowsHighlight
        //   pagination
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
export default TabStock;