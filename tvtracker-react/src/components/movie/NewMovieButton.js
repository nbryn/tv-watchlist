import React, { Component } from "react";
import { Link } from "react-router-dom";

const AddMovieButton = () => {
  return (
    <React.Fragment>
      <Link to="/addMovie" className="btn btn-lg btn-info">
        Add Movie
      </Link>
    </React.Fragment>
  );
};

export default AddMovieButton;
