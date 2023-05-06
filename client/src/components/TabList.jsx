import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "react-router-dom";

const TabList = (props) => {
    const [fetchedMedicineData, setFetchedMedicineData] = useState(null);

    useEffect(() => setFetchedMedicineData(props.fetchedMedicineData), [props.fetchedMedicineData]);

    return (
        <>
            <div id="tab-list" className="dash-component">
                <legend align="center">Medicine Reminder</legend>
                {fetchedMedicineData ? (
                    <>
                        <Table striped bordered hover>
                            <tr>
                                <th>Name</th>
                                <th>Frequency</th>
                                <th>Time</th>
                            </tr>
                            {fetchedMedicineData
    .filter((element) => element?.frequency)
    .map((element, key) => {
        return (
            <tr key={key}>
                <td>{element.name}</td>
                <td>
                    {element.frequency}
                </td>
                <td>
                    <ul id="meds-table-list">
                        {element?.timeOfDay &&
                            Object.values(
                                element?.timeOfDay
                            ).every(
                                (val) => !val.yesOrNot
                            ) ? (
                                <CgUnavailable style={{ color: "black" }} />
                        ) : (
                            <>
                                {element?.timeOfDay?.morning?.yesOrNot && (
                                    <li>
                                        Morning{" "}
                                        {
                                            element.timeOfDay
                                                .morning
                                                .yesOrNot
                                        }
                                    </li>
                                )}
                                {element?.timeOfDay?.afternoon?.yesOrNot && (
                                    <li>
                                        Afternoon{" "}
                                        {
                                            element.timeOfDay
                                                .afternoon
                                                .yesOrNot
                                        }
                                    </li>
                                )}
                                {element?.timeOfDay?.evening?.yesOrNot && (
                                    <li>
                                        Evening{" "}
                                        {
                                            element.timeOfDay
                                                .evening
                                                .yesOrNot
                                        }
                                    </li>
                                )}
                                {element?.timeOfDay?.night?.yesOrNot && (
                                    <li>
                                        Night{" "}
                                        {
                                            element.timeOfDay
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
                            <Link to={'/medicines'}> <button className="dash-button">
                                <span>+</span>
                            </button>
							</Link>
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