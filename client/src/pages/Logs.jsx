import { GrCatalog } from "react-icons/gr";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

const Logs = ()=>{

    const logsData= [
        {
            content:"Crocin taken on 5th May Night",
        },
        {
            content:"Crocin taken on 5th May Evening",
        },
        {
            content:"Crocin taken on 5th May Morning",
        },
        {
            content:"Crocin taken on 5th May",
        },
        {
            content:"Crocin taken on 5th May",
        },
        {
            content:"Crocin taken on 5th May",
        },
    ]
    return(
        <>
        <Navbar buttons='true'/>

        <div className="d-flex">
            <Sidenav/>

            <div className="d-flex flex-column w-100 align-items-center">
					<h3 className="charts-heading">
						Medicine Logs <GrCatalog style={{ fontSize: "30px",backgroundColor:'white', borderRadius:"25%",padding:"3px" }} />
					</h3>
                    <div className="logs-list">
                        {
                            logsData.map((elem)=>{
                                return <div>{elem.content}</div>
                            })
                        }
                    </div>
				</div>

        </div>

        </>
    )
}
export default Logs;