import React, { Component } from "react";
import { getVideoProd, newVideoProd } from "../../actions/videoProdActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import classnames from "classnames";
import { black } from "material-ui/styles/colors";

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

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getVideoProd(id, this.props.history);

    this.setState({
      title: this.props.videoProd.title,
      genre: this.props.videoProd.genre,
      rating: this.props.videoProd.rating,
      description: this.props.videoProd.description,
      type: this.props.videoProd.type
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

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
                <h3> Edit </h3>

                <TextField
                  type="text"
                  name="title"
                  hintText="Enter title"
                  floatingLabelText="Title"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.state.title}
                  disabled
                />

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
                  hintText="Enter your own custom description"
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
                    <label className="btn btn rx">
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
                    <label className="btn btn rx">
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
                    <label className="btn btn rx">
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

UpdateVideoProd.propTypes = {
  getVideoProds: PropTypes.func.isRequired,
  newVideoProd: PropTypes.func.isRequired,
  videoProd: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  videoProd: state.videoProd.videoProd,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getVideoProd, newVideoProd }
)(UpdateVideoProd);
