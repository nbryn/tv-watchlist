import React, { Component } from "react";
import { Link } from "react-router-dom";

const AddTvShowButton = () => {
  return (
    <React.Fragment>
      <Link to="/addTvShow" className="btn btn-lg btn-info">
        Add Tv-Show
      </Link>
    </React.Fragment>
  );
};

export default AddTvShowButton;
