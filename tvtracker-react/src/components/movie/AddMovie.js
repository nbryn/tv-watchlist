import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { newMovie } from "../../actions/movieActions";

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      genre: "",
      rating: "",
      description: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.error });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newMovie = {
      title: this.state.title,
      genre: this.state.genre,
      rating: this.state.rating,
      description: this.state.description
    };

    this.props.newMovie(newMovie, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-7 m-auto">
                <h5 className="display-4 text-center">Add Movie</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.title
                      })}
                      placeholder="Title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                    {errors.projectName && (
                      <div className="invalid-feedback">{errors.title}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.genre
                      })}
                      placeholder="Genre"
                      name="genre"
                      value={this.state.genre}
                      onChange={this.onChange}
                    />
                    {errors.genre && (
                      <div className="invalid-feedback">{errors.genre}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.rating
                      })}
                      placeholder="Rating"
                      name="rating"
                      value={this.state.rating}
                      onChange={this.onChange}
                    />
                    {errors.rating && (
                      <div className="invalid-feedback">{errors.rating}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.description
                      })}
                      placeholder="Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      className={classnames("btn btn-primary btn-block mt-4")}
                      placeholder="OK"
                      name="ok-button"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddMovie.propTypes = {
  newMovie: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { newMovie }
)(AddMovie);
