import { GrCatalog } from "react-icons/gr";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import { ListGroup } from "react-bootstrap";

const Logs = () => {
    // const [logsData, setLogsData] = useState(null);


    const handleFetchLogs = async()=>{
        // REQUEST 
        // setLogsData();
    }

    const logsData = [
        // {
        //     content: "Crocin taken on 5th May Night",
        // },
        // {
        //     content: "Crocin taken on 5th May Evening",
        // },
        // {
        //     content: "Crocin taken on 5th May Morning",
        // },
        // {
        //     content: "Crocin taken on 5th May",
        // },
        // {
        //     content: "Crocin taken on 5th May",
        // },
        // {
        //     content: "Crocin taken on 5th May",
        // },
    ]
    return (
        <>
            <Navbar buttons='true' />

            <div className="d-flex" style={{minHeight:"100vh"}}>
                <Sidenav />

                <div className="d-flex flex-column w-100 align-items-center">
                    <h3 className="charts-heading">
                        Medicine Logs <GrCatalog style={{ fontSize: "30px", backgroundColor: 'white', borderRadius: "25%", padding: "3px" }} />
                    </h3>
                    <div className="logs-list bg-dark">
                        <ListGroup as="ol" numbered>
                        {
                            (logsData.length!==0 && logsData)?logsData?.map((elem) => {
                                return <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{elem.content}</div>
                                           {elem.content}
                                        </div>
                                      
                                    </ListGroup.Item>
                            }):(
                                 <p>Logs unavailable</p>
                            )
                        }
                        
                        
                        </ListGroup>
                                </div>
				</div>

                </div>

            </>
            )
}
            export default Logs;