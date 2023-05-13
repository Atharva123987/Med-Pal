import { useEffect, useState } from "react";
import { Button, Table, Toast } from "react-bootstrap";
import {
  AiFillAlipayCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { CgUnavailable } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import LoadingCircle from "./SkeletonLoaders/LoadingCircle";

const TabList = (props) => {
  const [fetchedMedicineData, setFetchedMedicineData] = useState(null);
  const { user } = useAuthContext();
  const {handleAddLogs} = props;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(
    () => setFetchedMedicineData(props.fetchedMedicineData),
    [props.fetchedMedicineData]
  );

  const handleDelete = async (deleteID) => {
    const axios = require("axios");

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: "https://medpal-backend.onrender.com/api/medicines/" + deleteID,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        props.handleFetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = async (e, id, quantity, name) => {
    if (quantity === 1) {
      handleDelete(id);
      handleAddLogs(name);
      return;
    }
    
    e.preventDefault();
    console.log("ID ", id);
    console.log("QUANTITY ", quantity);
    let data = JSON.stringify({
      quantity: quantity - 1,
    });
    
    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `https://medpal-backend.onrender.com/api/medicines/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      data: data,
    };
    
    axios
    .request(config)
    .then((response) => {
      props.setShowTaken(true);
        props.setTabletName(name);
        props.handleFetch();
        handleAddLogs(name);
        
      })
      .catch((error) => {
        console.log(error);
        // setShowError(true);
      });
    };
    
    return (
      <>
      <div id="tab-list" className={fetchedMedicineData?"dash-component":"dash-component loading-screen"}>
        <legend align="center">Medicine Reminder</legend>
        {fetchedMedicineData ? (
          <>
            <Table striped bordered hover>
              <thead>
              <tr>
                <th>Name</th>
                <th>Frequency</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              {fetchedMedicineData
                .filter((element) => element?.frequency)
                .map((element, key) => {
                  return (
                    <tr key={key}>
                      <td>{element.name}</td>
                      <td>{element.frequency}</td>
                      <td>
                        <ul id="meds-table-list">
                          {element?.timeOfDay &&
                          Object.values(element?.timeOfDay).every(
                            (val) => !val.yesOrNot
                          ) ? (
                            <CgUnavailable style={{ color: "black" }} />
                          ) : (
                            <>
                              {element?.timeOfDay?.morning?.yesOrNot && (
                                <li>
                                  Morning {element.timeOfDay.morning.yesOrNot}
                                </li>
                              )}
                              {element?.timeOfDay?.afternoon?.yesOrNot && (
                                <li>
                                  Afternoon{" "}
                                  {element.timeOfDay.afternoon.yesOrNot}
                                </li>
                              )}
                              {element?.timeOfDay?.evening?.yesOrNot && (
                                <li>
                                  Evening {element.timeOfDay.evening.yesOrNot}
                                </li>
                              )}
                              {element?.timeOfDay?.night?.yesOrNot && (
                                <li>
                                  Night {element.timeOfDay.night.yesOrNot}
                                </li>
                              )}
                            </>
                          )}
                        </ul>
                      </td>
                      <td>
                        <div>
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>Take Medicine</Tooltip>}
                          >
                            <Button
                              onClick={(e) =>
                                handleEdit(
                                  e,
                                  element._id,
                                  element.quantity,
                                  element.name
                                )
                              }
                              variant="secondary"
                            >
                              <AiFillMinusCircle />
                            </Button>
                          </OverlayTrigger>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                </tbody>
            </Table>
            <div className="dash-button-container">
              <Link to={"/medicines"}>
                {" "}
                <Button variant="info" onClick={scrollToTop}>
                  <AiFillPlusCircle color="white" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <LoadingCircle/>
        )}
      </div>
    </>
  );
};
export default TabList;
