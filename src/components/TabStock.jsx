import { tab } from "@testing-library/user-event/dist/tab";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from 'axios';
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const TabStock = () =>{


const columns = [
    {
        name:"Crocin",
        stock:"10 days",
        expiryDate:"10-10-1000",
        
        
    },
    {
      name:"Crocin",
      stock:"10 days",
      expiryDate:"10-10-1000",
        
    },
    {
      name:"Crocin",
      stock:"10 days",
      expiryDate:"10-10-1000",
    },
    {
      name:"Crocin",
      stock:"10 days",
      expiryDate:"10-10-1000",
      
    },
    {
      name:"Crocin",
      stock:"10 days",
      expiryDate:"10-10-1000",
    },
    {
      name:"Crocin",
      stock:"10 days",
      expiryDate:"10-10-1000",
    },
    {
      name:"Crocin",
      stock:"10 days",
      expiryDate:"10-10-1000",
    },
    {
      name:"Crocin",
      stock:"10 days",
      expiryDate:"10-10-1000",
    },
    
]

    return (
        <>
        <div id="tab-stock" className="dash-component"> 
          <legend align="left">Tablet Stock</legend>

          <table>

            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Expiry</th>
            </tr>

            {columns.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.stock}</td>
                  <td>{val.expiryDate}</td>
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
export default TabStock;