const Prescription = () =>{
    return (
        <>
        <div id="component-name" className="dash-component"> {/* <== Change id of the div to the name of component  */}
        <fieldset>
          <legend align="left">Prescriptions</legend>
          
          {/* <-- Add component specific info here --> */}
          <h1>This is component 3</h1>
          <button className='dash-button'><span>+</span></button>
        </fieldset>
        </div>
        </>
      )
}
export default Prescription;