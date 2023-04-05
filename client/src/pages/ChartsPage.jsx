import Navbar from "../components/Navbar";
import AllCharts from '../components/Charts'
import { Form, Toast } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Charts = () => {

    const [chartType, setChartType] = useState(null)
    const [readingValue, setReadingValue] = useState(null)
    const [readingDate, setReadingDate] = useState(null)
    const [showToast, setShowToast] = useState(false);
    const [showError, setShowError] = useState(false);
    const [countValue, setCountValue] = useState(null)
    const [fetchedData, setFetchedData] = useState([[
        {
                date: new Date(2020, 6, 1).toISOString().slice(0, 10),
                count: 130,
            },
            {
                date: new Date(2021, 5, 1).toISOString().slice(0, 10),
                count: 120,
            },
            {
                date: new Date(2021, 7, 1).toISOString().slice(0, 10),
                count: 190,
            },
            {
                date: new Date(2021, 8, 1).toISOString().slice(0, 10),
                count: 300,
            },
            {
                date: new Date(2022, 12, 1).toISOString().slice(0, 10),
                count: 40,
            }
        ],
        [
            {
                date: new Date(2020, 6, 1).toISOString().slice(0, 10),
                count: 130,
            },
            {
                date: new Date(2021, 5, 1).toISOString().slice(0, 10),
                count: 220,
            },
            {
                date: new Date(2021, 7, 1).toISOString().slice(0, 10),
                count: 250,
            },
            {
                date: new Date(2021, 8, 1).toISOString().slice(0, 10),
                count: 300,
            },
            {
                date: new Date(2022, 12, 1).toISOString().slice(0, 10),
                count: 100,
            },
        ],
        [
            {
                date: new Date(2020, 6, 1).toISOString().slice(0, 10),
                count: 6,
            },
            {
                date: new Date(2021, 5, 1).toISOString().slice(0, 10),
                count: 17,
            },
            {
                date: new Date(2021, 7, 1).toISOString().slice(0, 10),
                count: 3,
            },
            {
                date: new Date(2021, 8, 1).toISOString().slice(0, 10),
                count: 6,
            },
            {
                date: new Date(2022, 12, 1).toISOString().slice(0, 10),
                count: 19,
            },
        ]
    ])

    useEffect(() => {
        handleFetch();
        // console.log(fetchedData)
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // !!!POST REQUEST HERE
        // USE chartType TO DETERMINE TO WHICH ENDPOINT THE POST REQUEST IS TO BE MADE
        // EXAMPLE : 
        // let config = {
		// 	method: "post",
		// 	maxBodyLength: Infinity,
		// 	url: "http://localhost:4000/api/charts/${chartType}",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	data: data,
		// };
        
        console.log(chartType);
        console.log(readingValue)
        console.log(readingDate.toISOString())

        
        setShowToast(true);

    }

    const handleFetch = async () => {
        try {
            // !!!GET REQUEST GOES HERE
            // const response = axios.get(``)
            // const response = axios.get(``)
            // const response = axios.get(``)
            // setFetchedData({response1.data},{response2.data},{response3.data});
        }
        catch (err) {
            console.log(err);
            setShowError(true);
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
                            setChartType(e.target.value)
                        }}>
                            <option>Select a chart</option>
                            <option value="bSugar" >Blood Sugar</option>
                            <option value="bPressure">Blood Pressure</option>
                            <option value="bHaemoglobin">Haemoglobin</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" style={{ width: "300px" }}>
                            <Form.Label>Count value</Form.Label>
                            <Form.Control type="number" placeholder="Count value" onChange={(e)=>setReadingValue(e.target.value)} />
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
                <AllCharts chartData={fetchedData} />

                <div id='toasts' style={{ position: "fixed", zIndex: "10", top: "3%", right: "3%" }}>
                <Toast onClose={() => { setShowToast(false) }} bg='success' position='middle-center' show={showToast} delay={3000} autohide style={{ position: "relative", zIndex: "10" }}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto text-success">Value Added!</strong>
                        {/* <small>{bSugar}</small> */}
                    </Toast.Header>
                    <Toast.Body className='text-white'></Toast.Body>
                </Toast>

                <Toast onClose={() => { setShowError(false) }} bg='danger' position='middle-center' show={showError} delay={2000} autohide style={{ position: "relative", zIndex: "10" }}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto text-danger">Enter Valid Name!</strong>
                    </Toast.Header>
                    <Toast.Body className='text-white'>Tablet name should be unique</Toast.Body>
                </Toast>
                </div>
            </div >
        </>
    )
}
export default Charts;