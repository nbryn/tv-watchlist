import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb">
          <div className="row">
            <div className="col-1" />
            <div className="col-lg-4 col-md-2 col-2">
              <h3>Title: {movie.title}</h3>
              <br />
              <h5>Genre: {movie.genre}</h5>
              <br />
              <h5>Description: {movie.description}</h5>
              <br />
              <h5>Rating: {movie.rating}</h5>
            </div>
            <div className="col-md-3 d-none d-lg-block">
              <ul className="list-group">
                <Link to={`/updateMovie/${movie.title}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Update Movie Info</i>
                  </li>
                </Link>
                <a href="">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle pr-1">Delete Movie</i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
