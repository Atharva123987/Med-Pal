import Table from 'react-bootstrap/Table'
import { useState } from 'react';

const AllMedicinesTable = (props)=>{

    const fetchedData = props.fetchedData;
    
    return (
        <>
        <Table striped bordered hover>
            <thead>
              <tr>
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
                          {}
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