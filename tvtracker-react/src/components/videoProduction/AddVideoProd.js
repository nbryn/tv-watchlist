import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { newVideoProd } from "../../actions/VideoProdActions";

class AddVideoProd extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      genre: "",
      rating: "",
      description: "",
      type: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newVideoProd = {
      title: this.state.title,
      genre: this.state.genre,
      rating: this.state.rating,
      description: this.state.description,
      type: this.state.type
    };

    this.props.newVideoProd(newVideoProd, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="videoprod">
          <div className="container">
            <div className="row">
              <div className="col-md-7 ">
                <h5 className="display-4 text-center">Add item</h5>
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
                    {errors.title && (
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

                  <div
                    className="btn-group btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <div className="first">
                      <label className="btn btn-primary">
                        <input
                          type="radio"
                          placeholder="Type"
                          name="type"
                          id="type1"
                          autoComplete="off"
                          value={this.state.type}
                          value={"movie"}
                          onChange={this.onChange}
                        />{" "}
                        Movie
                      </label>
                    </div>
                    <div className="second">
                      <label className="btn btn-primary">
                        <input
                          type="radio"
                          placeholder="Type"
                          name="type"
                          id="type2"
                          autoComplete="off"
                          value={this.state.type}
                          value={"series"}
                          onChange={this.onChange}
                        />{" "}
                        Series
                      </label>
                    </div>
                    <div className="third">
                      <label className="btn btn-primary">
                        <input
                          type="radio"
                          placeholder="Type"
                          name="type"
                          id="type3"
                          autoComplete="off"
                          value={this.state.type}
                          value={"tvshow"}
                          onChange={this.onChange}
                        />{" "}
                        Tv-Show
                      </label>
                    </div>
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

AddVideoProd.propTypes = {
  newVideoProd: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { newVideoProd }
)(AddVideoProd);
