import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { CgUnavailable } from "react-icons/cg";

const TabList = (props) => {
    const [fetchedMedicineData, setFetchedMedicineData] = useState(null);

    useEffect(() => setFetchedMedicineData(props.fetchedMedicineData), [props.fetchedMedicineData]);

    return (
        <>
            <div id="tab-list" className="dash-component">
                <legend align="center">Tablet List</legend>
                {fetchedMedicineData ? (
                    <>
                        <Table striped bordered hover>
                            <tr>
                                <th>Name</th>
                                <th>Frequency</th>
                                <th>Time</th>
                            </tr>
                            {fetchedMedicineData.map((element, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{element.name}</td>
                                        <td>
                                            {element.frequency ? (
                                                element.frequency
                                            ) : (
                                                <CgUnavailable style={{color:"black"}} />
                                            )}
                                        </td>
                                        <td>
										<ul id="meds-table-list">
													{element?.timeOfDay &&
														Object.values(
															element.timeOfDay
														).every(
															(val) => !val.yesOrNot
														) ? (
															<CgUnavailable/>
													) : (
														<>
															{element?.timeOfDay
																?.morning
																?.yesOrNot && (
																	<li>
																		Morning{" "}
																		{
																			fetchedMedicineData[0]
																				.timeOfDay
																				.morning
																				.yesOrNot
																		}
																	</li>
																)}
															{element?.timeOfDay
																?.afternoon
																?.yesOrNot && (
																	<li>
																		Afternoon{" "}
																		{
																			fetchedMedicineData[0]
																				.timeOfDay
																				.afternoon
																				.yesOrNot
																		}
																	</li>
																)}
															{element?.timeOfDay
																?.evening
																?.yesOrNot && (
																	<li>
																		Evening{" "}
																		{
																			fetchedMedicineData[0]
																				.timeOfDay
																				.evening
																				.yesOrNot
																		}
																	</li>
																)}
															{element?.timeOfDay
																?.night
																?.yesOrNot && (
																	<li>
																		Night{" "}
																		{
																			fetchedMedicineData[0]
																				.timeOfDay
																				.night
																				.yesOrNot
																		}
																	</li>
																)}
														</>
													)}
												</ul>
                                        </td>
                                    </tr>
                                );
                            })}
                        </Table>
                        <div className="dash-button-container">
                            <button className="dash-button">
                                <span>+</span>
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Loading medicine data...</p>
                )}
            </div>
        </>
    );
};
export default TabList;
