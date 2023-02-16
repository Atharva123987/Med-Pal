import { useState,useEffect,PropTypes} from 'react'
import './fader.css'

Fader.defaultProps = {
    text: 'Hello World!'
}
Fader.propTypes = {
    text: PropTypes.string,
}
const Fader=  () =>{
    
    const [fadeProp, setFadeProp] = useState({fade:'fade-in',})

    useEffect(() => {
        const timeout = setInterval(() => {
           if (fadeProp.fade === 'fade-in') {
              setFadeProp({
                   fade: 'fade-out'
              })
           } else {
                setFadeProp({
                   fade: 'fade-in'
                })
           }
        }, 4000);

   return () => clearInterval(timeout)
   }, [fadeProp])

    return(
        <h1 className={fadeProp.fade}>{text}</h1>
    )
}


export default Fader;
