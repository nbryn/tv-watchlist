import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { newUser } from "../../actions/UserActions";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      fullName: "",
      password: "",
      verifyPassword: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.user.validToken) {
      this.props.history.push("/main");
    }
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

    const user = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      verifyPassword: this.state.verifyPassword
    };

    this.props.newUser(user, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="Sign">
        <MuiThemeProvider>
          <form onSubmit={this.onSubmit}>
            <div>
              <h3> Sign Up </h3>

              <TextField
                type="text"
                hintText="Enter your full name"
                floatingLabelText="Full name"
                value={this.state.fullName}
                onChange={this.onChange}
              />
              {errors.fullName && (
                <div className="invalid-feedback">{errors.fullName}</div>
              )}
              <br />
              <TextField
                hintText="Enter your email"
                floatingLabelText="Email"
                value={this.state.username}
                onChange={this.onChange}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
              <br />
              <TextField
                hintText="Enter your password"
                type="password"
                floatingLabelText="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
              <br />
              <TextField
                hintText="Verify your password"
                type="password"
                floatingLabelText="Verify Password"
                value={this.state.verifyPassword}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}

              <br />
              <br />
              <input type="submit" className="btn btn-secondary" />
            </div>
          </form>
        </MuiThemeProvider>
      </div>
    );
  }
}

SignUp.propTypes = {
  user: PropTypes.object.isRequired,
  newUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { newUser }
)(SignUp);
