import React, { Component } from "react";
import { getVideoProd, newVideoProd } from "../../actions/VideoProdActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateVideoProd extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
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
    const { id, title, genre, rating, description, type } = nextProps.videoProd;

    this.setState({
      id,
      title,
      genre,
      rating,
      description,
      type
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getVideoProd(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateVideoProd = {
      id: this.state.id,
      title: this.state.title,
      genre: this.state.genre,
      description: this.state.rating,
      rating: this.state.description,
      type: this.state.type
    };

    this.props.newVideoProd(updateVideoProd, this.props.history);
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="movie">
        <div className="container">
          <div className="row">
            <div className="col-md-7 m-auto">
              <h5 className="display-4 text-center">Edit Movie Info</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    disabled
                  />
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
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
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

UpdateVideoProd.propTypes = {
  getVideoProds: PropTypes.func.isRequired,
  newVideoProd: PropTypes.func.isRequired,
  videoProd: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movie: state.videoProd.videoProd,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getVideoProd, newVideoProd }
)(UpdateVideoProd);
