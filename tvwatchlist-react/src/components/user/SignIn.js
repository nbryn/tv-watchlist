import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { connect } from "react-redux";
import classnames from "classnames";
import { signIn } from "../../actions/UserActions";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
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
    if (nextProps.user.validToken) {
      this.props.history.push("/main");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.signIn(LoginRequest);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="Sign">
        <MuiThemeProvider>
          <form onSubmit={this.onSubmit} autocomplete="off">
            <div>
              <h3> Sign In </h3>

              <TextField
                type="text"
                className={classnames("form-control-file", {
                  "is-invalid": errors.username
                })}
                hintText="Enter your username(email)"
                floatingLabelText="Username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
              <br />
              <TextField
                type="password"
                className={classnames("form-control-file", {
                  "is-invalid": errors.password
                })}
                hintText="Enter your password"
                floatingLabelText="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
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
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { signIn }
)(SignIn);
