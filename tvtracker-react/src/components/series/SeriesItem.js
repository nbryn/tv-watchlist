import React, { Component } from "react";
import { Link } from "react-router-dom";

class SeriesItem extends Component {
  render() {
    const { serie } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-1" />
            <div className="col-lg-3 col-md-2 col-1">
              <h6>Title: {serie.title}</h6>
              <h6>Genre: {serie.genre}</h6>
              <h6>Rating: {serie.rating}</h6>
              <h6>
                {" "}
                Description:
                <br /> {serie.description}
              </h6>
            </div>

            <div className="col-md-3 d-none d-lg-block">
              <ul className="list-group">
                <Link to={`/updateSeries/${serie.title}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Update Series Info</i>
                  </li>
                </Link>
                <a href="">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle pr-1">Delete Series</i>
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

export default SeriesItem;
