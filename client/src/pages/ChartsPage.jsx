import Navbar from "../components/Navbar";
import AllCharts from '../components/Charts'
import { Form } from "react-bootstrap";
import { useState, useRef } from "react";
// import AddMedicineModal from "../components/Medicines/AddMedicineModal";
const Charts = () => {

    const [chartType, setChartType] = useState(null)
    const [bSugar, setBSugar] = useState(null)
    const [bPressure, setBPressure] = useState(null)
    const [bHaemoglobin, setBHaemoglobin] = useState(null)

    const handleValue = (e)=>{
        switch(chartType){
            case 'bSugar':
                setBSugar(e.target.value)
                break;
            case 'bPressure':
                setBPressure(e.target.value)
                break;
            case 'bHaemoglobin':
                setBHaemoglobin(e.target.value)
                break;
            default:
                console.log("Choose a chart type!!!")
                e.target.value = ''
        }
    }   

    return (
        <>
            <Navbar buttons={false} />
            <h1>Charts</h1>
            <div className="d-flex justify-content-evenly">
                <div>
                    <Form>
                        <Form.Select aria-label="Default select example" onChange={(e)=>{
                                console.log(e.target.value)
                                setChartType(e.target.value)
                            }}>
                            <option>Select a chart</option>
                            <option value="bSugar" >Blood Sugar</option>
                            <option value="bPressure">Blood Pressure</option>
                            <option value="bHaemoglobin">Haemoglobin</option>
                        </Form.Select>
                    
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" style={{ width: "300px" }}>
                            <Form.Label>Count value</Form.Label>
                            <Form.Control type="number" placeholder="Quantity" onChange={handleValue} />
                            </Form.Group>

                    </Form>
                </div>
                <AllCharts />
               
            {/* <AddMedicineModal/> */}
        </div >
        </>
    )
}
export default Charts;