import { useEffect, useState } from "react";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileImage } from "react-icons/fa";
import LoadingCircle from "../components/SkeletonLoaders/LoadingCircle"
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { Button } from "react-bootstrap";

const Prescription = (props) => {
    const [fetchedData, setFetchedData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); // set loading state when props change
        setFetchedData(props.fetchedReportsData);
        setIsLoading(false); // set loading state to false after data is fetched
    }, [props.fetchedReportsData]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <div id="prescription" className={fetchedData?"dash-component":"dash-component loading-screen"}>
                <legend align="center">Medical Documents</legend>
                {!fetchedData? (
                    <LoadingCircle /> 
                ) : (
                    <>
                    <table>
                        {fetchedData?.map((val, key) => {
                            const isPdf = val.reportResourceURL?.toLowerCase().endsWith(".pdf");
                            return (
                                <tr
                                    key={key}
                                >
                                    <td>
                                        <a href={val.reportResourceURL} target="_blank" rel="noopener noreferrer"
                                            style={{ display: "block", fontSize: "1.2rem", marginLeft: "10px" }}>
                                            {isPdf ? (
                                                <FaFilePdf
                                                    style={{
                                                        width: "1.2rem",
                                                        height: "1.2rem",
                                                    }}
                                                />
                                            ) : (
                                                <FaFileImage />
                                            )}
                                            {/* {val.date} */}
                                            <span>{val.reportName?.slice(0, 20)}...</span>
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                     <div className="dash-button-container">
                     <Link to={'/reports'}> <Button variant="info" onClick={scrollToTop}><AiFillPlusCircle color="white" /></Button>
                     </Link>
                 </div>
                 </>
                )}

               
            </div>
        </>
    );
};

export default Prescription;
