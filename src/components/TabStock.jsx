import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";

const TabStock = () =>{

    const [tabStore,settabStore] = useState(
        [{
            "name" : "crocin",
            "quantity":3,
            "expiry":"2023-09-23",
        },
        {
            "name":"combiflam",
            "quantity":5,
            "expiry":"2023-05-12",
        },
        {
            "name":"norflox",
            "quantity":3,
            "expiry":"2023-12-20",
        }
    ]
        );

    

    return (
        <>
        <div id="component-name" className="dash-component"> {/* <== Change id of the div to the name of component  */}
        <fieldset>
          <legend align="left">Tablet Stock</legend>
           
          
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Expiry</th>
                    </tr>
                    {
                        tabStore.map((val,ind,elem)=>{
                            console.log(elem[ind]);
                            
                        })
                    }
                    
                </table>
       
          
          <button className='dash-button'><span>+</span></button>
        </fieldset>
        </div>
        </>
      )
}
export default TabStock;