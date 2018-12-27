import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import classnames from "classnames";
import { newVideoProd } from "../../actions/VideoProdActions";
import { black } from "material-ui/styles/colors";

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
    const styles = {
      floatingLabelStyle: {
        color: black
      }
    };

    return (
      <div className="background">
        <div className="sign">
          <MuiThemeProvider>
            <form onSubmit={this.onSubmit} autoComplete="off">
              <div>
                <h3> Add item </h3>
                <TextField
                  type="text"
                  className={classnames("form-control-file", {
                    "is-invalid": errors.title
                  })}
                  name="title"
                  hintText="Enter title"
                  floatingLabelText="Title"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.state.title}
                  onChange={this.onChange}
                />
                {errors.title && (
                  <div className="invalid-feedback">{errors.title}</div>
                )}
                <br />
                <TextField
                  type="text"
                  className={classnames("form-control-file", {
                    "is-invalid": errors.genre
                  })}
                  name="genre"
                  hintText="Enter genre"
                  floatingLabelText="Genre"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.state.genre}
                  onChange={this.onChange}
                />
                {errors.genre && (
                  <div className="invalid-feedback">{errors.genre}</div>
                )}
                <br />
                <TextField
                  type="text"
                  className={classnames("form-control-file", {
                    "is-invalid": errors.rating
                  })}
                  name="rating"
                  hintText="Enter E.g. IMDB rating"
                  floatingLabelText="Rating"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.state.rating}
                  onChange={this.onChange}
                />
                {errors.rating && (
                  <div className="invalid-feedback">{errors.rating}</div>
                )}
                <br />
                <TextField
                  type="text"
                  className={classnames("form-control-file", {
                    "is-invalid": errors.description
                  })}
                  name="description"
                  hintText="Enter custom description"
                  floatingLabelText="Description"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.state.description}
                  onChange={this.onChange}
                />
                {errors.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
                <br />
                <br />
                <div
                  className="btn-group btn-group-toggle"
                  data-toggle="buttons"
                >
                  <div className="first">
                    <label className="btn btn">
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
                    <label className="btn btn">
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
                    <label className="btn btn">
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
                      <br />
                      TV-Show
                    </label>
                  </div>
                </div>
                <br />
                <br />
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Submit"
                />
              </div>
            </form>
          </MuiThemeProvider>
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
