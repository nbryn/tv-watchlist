import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteVideoProd } from "../../actions/VideoProdActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class VideoProdItem extends Component {
  onDeleteClick = title => {
    this.props.deleteVideoProd(title);
  };

  render() {
    const { videoProd } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-1" />
            <div className="col-md-4 col-md-2 col-1">
              <h6>Title: {videoProd.title}</h6>
              <h6>Genre: {videoProd.genre}</h6>
              <h6>Rating: {videoProd.rating}</h6>
              <h6>Description: {videoProd.description}</h6>
            </div>
            <div className="col-md-2 nbru">
              <ul className="list-group">
                <Link to={`/updateVideoProd/${videoProd.title}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Update Info</i>
                  </li>
                </Link>

                <li
                  className="list-group-item delete"
                  onClick={this.onDeleteClick.bind(this, videoProd.title)}
                >
                  <i className="fa fa-minus-circle pr-1">Delete</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VideoProdItem.propTypes = {
  deleteVideoProd: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteVideoProd }
)(VideoProdItem);
