import React, { Component } from "react";
import { Link } from "react-router-dom";

const NewVideoProdButton = props => {
  return (
    <React.Fragment>
      <Link to="/addVideoProd" className="btn btn-lg btn-info">
        {props.text}
      </Link>
    </React.Fragment>
  );
};

export default NewVideoProdButton;
