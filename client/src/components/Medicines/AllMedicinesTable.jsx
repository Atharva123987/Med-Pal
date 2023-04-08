import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';
import {CgUnavailable} from 'react-icons/cg'
const AllMedicinesTable = (props) => {

  const fetchedData = props.fetchedData;

  useEffect(() => {

    if (fetchedData) {

    }

  }, [fetchedData])


  return (
    <>
      <Table striped bordered hover >
        <thead>
          <tr style={{ position: "sticky", top: "0%", color: "white", background: "#212529" }}>
            <th>Tablet name</th>
            <th>Tablet quantity</th>
            <th>Tablet expiry</th>
            <th>Tablet frequency</th>
            <th>Tablet time of days</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData &&
            fetchedData.map((element, idx) => {
              return (
                <>
                  <tr>
                    <td>{element.name}</td>
                    <td>{element.quantity}</td>
                    <td>{new Date(element.expiry).toLocaleDateString()}</td>
                    <td>{element.frequency?element.frequency:<CgUnavailable/>}</td>
                    <td>
                      {

                        (
                          
                          <ul id='meds-table-list'>
                          {
                            (element?.timeOfDay && Object.values(element.timeOfDay).every(val => !val.yesOrNot)) ? 
                              <li><CgUnavailable/></li>
                              : 
                              <>
                                {element?.timeOfDay?.morning?.yesOrNot && <li>Morning {fetchedData[0].timeOfDay.morning.yesOrNot}</li>}
                                {element?.timeOfDay?.afternoon?.yesOrNot && <li>Afternoon {fetchedData[0].timeOfDay.afternoon.yesOrNot}</li>}
                                {element?.timeOfDay?.evening?.yesOrNot && <li>Evening {fetchedData[0].timeOfDay.evening.yesOrNot}</li>}
                                {element?.timeOfDay?.night?.yesOrNot && <li>Night {fetchedData[0].timeOfDay.night.yesOrNot}</li>}
                              </>
                          }
                        </ul>

                          

                        )
                      }
                    </td>

                    {/* e.timeOfDay.morning.yesOrNot && (
                      <li>Morning {fetchedData[0].timeOfDay.morning.yesOrNot}</li>
                      ),
                      e.timeOfDay.morning.yesOrNot && (
                      <li>Afternoon {fetchedData[0].timeOfDay.afternoon.yesOrNot}</li>
                      ),
                      e.timeOfDay.morning.yesOrNot && (
                      <li>Evening {fetchedData[0].timeOfDay.evening.yesOrNot}</li>
                      ),
                      e.timeOfDay.morning.yesOrNot && (
                      <li>Night {fetchedData[0].timeOfDay.night.yesOrNot}</li>
                      ) */}




                    {/* {fetchedData[0].timeOfDay.morning.yesOrNot && (
          <li>Morning {fetchedData[0].timeOfDay.morning.yesOrNot}</li>
        )}
        {fetchedData[0].timeOfDay.afternoon.yesOrNot && (
          <li>Afternoon {fetchedData[0].timeOfDay.afternoon.yesOrNot}</li>
        )}
        {fetchedData[0].timeOfDay.evening.yesOrNot && (
          <li>Evening {fetchedData[0].timeOfDay.evening.yesOrNot}</li>
        )}
        {fetchedData[0].timeOfDay.night.yesOrNot && (
          <li>Night {fetchedData[0].timeOfDay.night.yesOrNot}</li>
        )} */}



                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </>
  )
}
export default AllMedicinesTable;