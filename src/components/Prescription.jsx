import { useEffect } from 'react'
import PImg from '../assets/prescription.jpg'

const Prescription = () =>{


  const imgs = [
    {
      url:PImg,
      alt:"This is a img",
      date:"2002-01-23",
    },
    {
      url:PImg,
      alt:"This is a img",
      date:"2019-06-21",
    },
    {
      url:PImg,
      alt:"This is a img",
      date:"2020-12-01",
    },
    {
      url:PImg,
      alt:"This is a img",
      date:"2020-12-01",
    },
    {
      url:PImg,
      alt:"This is a img",
      date:"2020-12-01",
    },
    
  ]


    return (
        <>
        <div id="prescription" className="dash-component">
          <legend align="left">Prescriptions</legend>
          <table>
            
            {imgs.map((val, key,imgs) => {
              return (
                <tr key={key} style={
                  {
                    display:"flex",
                    justifyContent:"center",
                  }
                }>
                  <td><a href={val.url} target='_blank'><img src={val.url} style={{width:"7vh",height:"7vh"}}/></a>  {val.date}  </td>
                  
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
export default Prescription;