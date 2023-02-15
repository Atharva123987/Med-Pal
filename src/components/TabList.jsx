const TabList = () =>{
    return (
        <>
        <div id="component-name" className="dash-component"> {/* <== Change id of the div to the name of component  */}
        <fieldset>
          <legend align="left">Tablet List</legend>
          
          {/* <-- Add component specific info here --> */}

          <table>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Daily</th>
                    </tr>
                   
                    
                </table>
          
          <button className='dash-button'><span>+</span></button>
        </fieldset>
        </div>
        </>
      )
}
export default TabList;