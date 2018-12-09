import React, { Component } from "react";
import { Link } from "react-router-dom";

const AddMovieButton = () => {
  return (
    <React.Fragment>
      <Link to="/addSeries" className="btn btn-lg btn-info">
        Add Series
      </Link>
    </React.Fragment>
  );
};

export default AddMovieButton;
