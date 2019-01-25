import React, { Component } from "react";
import { Link } from "react-router-dom";

const NewVideoProdButton = props => {
  return (
    <React.Fragment>
      <Link to="/addVideoProd" className="btn btn-md btn-primary mr-1">
        New
      </Link>
    </React.Fragment>
  );
};

export default NewVideoProdButton;
