import React, { Component } from "react";
import { Link } from "react-router-dom";

const NewVideoProdButton = () => {
  return (
    <React.Fragment>
      <Link to="/addVideoProd" className="btn btn-lg btn-info">
        Add item
      </Link>
    </React.Fragment>
  );
};

export default NewVideoProdButton;
