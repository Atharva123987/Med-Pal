import Navbar from "../components/Navbar";
import AllCharts from '../components/Charts'
import { Form } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
// import AddMedicineModal from "../components/Medicines/AddMedicineModal";
const Charts = () => {

    const [chartType, setChartType] = useState(null)
    const [bSugar, setBSugar] = useState(null)
    const [bPressure, setBPressure] = useState(null)
    const [bHaemoglobin, setBHaemoglobin] = useState(null)
    const [readingDate, setReadingDate] = useState(null)
    const [payLoadData, setPayLoadData] = useState(null)
    const [fetchedData, setFetchedData] = useState(null)

    useEffect(()=>{
        handleFetch();
    },[])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // !!!POST REQUEST HERE
        // INSTEAD OF CONSOLE.LOG IN SWITCH, SET THE PAYLOAD DATA USING setPayLoadData() AND THEN SEND IT USING POST REQUEST

       

        switch (chartType) {
            case 'bSugar':
                console.log(bSugar)
                break;
            case 'bPressure':
                console.log(bPressure)
                break;
            case 'bHaemoglobin':
                console.log(bHaemoglobin)
                break;
            default:
                console.log("")

        }
        console.log(readingDate.toISOString())
    }

    const handleFetch = async()=>{
        try{
            // !!!GET REQUEST GOES HERE
            const response = axios.get(``)
            setFetchedData(response.data);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleValue = (e) => {
        switch (chartType) {
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
                        <Form.Select aria-label="Default select example" onChange={(e) => {
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

                        <Form.Group
                            className="mb-3"
                            controlId="appointmentTime"
                        >
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Time"
                                onChange={(e) =>
                                    setReadingDate(
                                        new Date(e.target.value)
                                    )

                                }
                            />
                        </Form.Group>

                        <Form.Group>
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </button>
                        </Form.Group>

                    </Form>
                </div>
                <AllCharts chartData={fetchedData}/>

                {/* <AddMedicineModal/> */}
            </div >
        </>
    )
}
export default Charts;