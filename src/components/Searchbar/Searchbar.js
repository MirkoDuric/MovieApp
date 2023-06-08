import React from "react";
import { Form, FormControl } from "react-bootstrap";
import "./Searchbar.css";
const Searchbar = () => {
  return (
    <Form inline className="form">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 searchbar"
      />
    </Form>
  );
};

export default Searchbar;
