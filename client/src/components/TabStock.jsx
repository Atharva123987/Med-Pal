import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import LoadingCircle from "./SkeletonLoaders/LoadingCircle";

const TabStock = (props) => {
  const [fetchedMedicineData, setFetchedMedicineData] = useState(null);
  const { user } = useAuthContext();
  const {handleAddLogs} = props
  useEffect(
    () => setFetchedMedicineData(props.fetchedMedicineData),
    [props.fetchedMedicineData]
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      props.setShowTaken(true);
      props.setTabletName(name);
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
      <div id="tab-stock" className={fetchedMedicineData?"dash-component":"dash-component loading-screen"}>
        <legend align="center">Medicine Inventory</legend>
    {
      !fetchedMedicineData?<LoadingCircle/>:(
        <>
<Table striped bordered hover>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Expiry</th>
            <th>Action</th>
          </tr>

          {fetchedMedicineData?.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.quantity}</td>
                <td>{new Date(val.expiry).toLocaleDateString()}</td>
                <td>
                  <div>
                    <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip>Take Medicine</Tooltip>}
                    >
                      <Button
                        onClick={(e) =>
                          handleEdit(e, val._id, val.quantity, val.name)
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
      )
    }
        
      </div>
    </>
  );
};
export default TabStock;
