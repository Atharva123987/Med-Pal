import { useEffect, useState } from "react";
import PImg from "../assets/prescription.jpg";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileImage } from "react-icons/fa";

const Prescription = (props) => {
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => setFetchedData(props.fetchedReportsData), [props.fetchedReportsData]);

    return (
        <>
            <div id="prescription" className="dash-component">
                <legend align="left">Prescriptions</legend>
                <table>
                    {fetchedData?.map((val, key) => {
                        const isPdf = val.reportResourceURL?.toLowerCase().endsWith(".pdf");
                        return (
                            <tr
                                key={key}
                            >
                                <td>
                                    <a href={val.reportResourceURL} target="_blank" rel="noopener noreferrer"
									style={{display:"block", fontSize:"1.2rem",marginLeft:"10px"}}>
                                        {isPdf ? (
                                            <FaFilePdf
                                                style={{
                                                    width: "2rem",
                                                    height: "2rem",
                                                }}
                                            />
                                        ) : (
                                            <FaFileImage/>
                                        )}
                                        {/* {val.date} */}
                                        <span>{val.reportName?.slice(0, 10)}...</span>
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </table>

                <div className="dash-button-container">
                    <button className="dash-button">
                        <span>+</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Prescription;
