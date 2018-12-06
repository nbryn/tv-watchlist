import React, { Component } from "react";
import { getMovie } from "../../actions/movieActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";

class UpdateMovie extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id, this.props.history);
  }
  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-7 m-auto">
              <h5 className="display-4 text-center">Edit Movie Info</h5>
              <hr />
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Genre"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Description"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Rating"
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateMovie.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie.movie
});

export default connect(
  mapStateToProps,
  { getMovie }
)(UpdateMovie);
