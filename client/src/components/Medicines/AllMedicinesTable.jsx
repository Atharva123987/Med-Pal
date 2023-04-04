import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';

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
                    <td>{element.frequency}</td>
                    <td>
                      {
                        fetchedData && fetchedData.map((elem) => {
                          return(Object.entries(elem.timeOfDay).forEach(([key, value]) => {
                            return(value.yesOrNot === true ? <h1>key</h1> : "Hello")
                          })
                        )})
                      }
                    </td>

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