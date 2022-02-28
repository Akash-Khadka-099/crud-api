import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import axios from "../../axios";
import "./tableData.css";

function TableData() {
  const [fetchedDetails, setFetchedDetails] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get();
    console.log(response);
    setFetchedDetails(response);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  // console.log(fetchedDetails)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {fetchedDetails.productCode} </td>
            <td> {fetchedDetails.name} </td>
            <td> {fetchedDetails.description} </td>
            <td> actions </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableData; 
