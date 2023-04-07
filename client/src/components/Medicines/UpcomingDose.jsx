import { ImClock } from 'react-icons/im'
const UpcomingDose = ()=>{
    return (
        <>
        <div style={{ width: "35vw" }}>
          <h4>Upcoming Dose</h4>
          <ul style={{
            listStyle: "none", margin: "0",
            padding: "0"
          }}>
            <li>
              <div className='d-flex flex-row m-3'>
                <p style={{ margin: "auto 20px auto 0" }}>Crocin</p>
                <span style={{ fontSize: "15px", marginRight:"10px" }}><ImClock /></span>
                <b>12:00pm</b>
              </div>
            </li>
            <li>
              <div className='d-flex flex-row m-3'>
                <p style={{ margin: "auto 20px auto 0" }}>Crocin</p>
                <span style={{ fontSize: "15px", marginRight:"10px" }}><ImClock /></span>
                <b>12:00pm</b>
              </div>
            </li>
            <li>
              <div className='d-flex flex-row m-3'>
                <p style={{ margin: "auto 20px auto 0" }}>Crocin</p>
                <span style={{ fontSize: "15px", marginRight:"10px" }}><ImClock /></span>
                <b>12:00pm</b>
              </div>
            </li>
            

          </ul>
        </div>
        </>
    )
}
export default UpcomingDose;