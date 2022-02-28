import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import axios from "../../axios"
import TableData from "./TableData";

function Formfill() {
  const [inputData, setInputData] = useState({
    manufacturer : "",
    productType : "",
    code : "",
    description : ""
});

const handleChange=(e)=>{
  setInputData({
    ...inputData,
    [e.target.name] : e.target.value
  })
}

  function submitHandler(e) {
    e.preventDefault();
   axios.post(`/insert`,{
     "productCode" : inputData.manufacturer,
     "name" : inputData.code,
     "description" : inputData.description
   })
  }
  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormGroup as={Row} className="d-flex">
          <FormGroup as={Row} className="mb-2">
            <FormLabel htmlFor="manufacturer" className="mb-2">
              Manufacturer
            </FormLabel>
            <Col sm={4}>
              <FormControl  onChange={handleChange} type="number" name="manufacturer" />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-2">
            <FormLabel htmlFor="productType" className="mb-2">
              Product type
            </FormLabel>
            <Col sm={4}>
              <FormControl onChange={handleChange} type="number" name="productType" />
            </Col>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="code">Code</FormLabel>
            <Col sm={4}>
              <FormControl onChange={handleChange} type="text" name="code" />
            </Col>
          </FormGroup>
         
          <FormGroup>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Col sm={4}>
              <FormControl onChange={handleChange} type="text" name="description" />
            </Col>
          </FormGroup>
        </FormGroup>
        <Button className="mt-2" type="submit" variant="primary">
          Submit
        </Button>
      </Form>
      <TableData />
    </>
  );
}

export default Formfill;
