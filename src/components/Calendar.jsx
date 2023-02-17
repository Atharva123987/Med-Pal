const Calendar = () =>{
    return (
        <>
        <div id="component-name" className="dash-component"> {/* <== Change id of the div to the name of component  */}
          <legend align="left">Calendar</legend>
          
          {/* <-- Add component specific info here --> */}
          <h1>This is component 5</h1>
          <div className="dash-button-container">
          <button className='dash-button'><span>+</span></button>
          </div>
        </div>
        </>
      )
}
export default Calendar