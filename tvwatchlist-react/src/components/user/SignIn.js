import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
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
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.state });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const signIn = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.signIn(signIn, this.props.history);
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="Sign">
        <MuiThemeProvider>
          <form onSubmit={this.onSubmit}>
            <div>
              <h3> Sign In </h3>

              <TextField
                type="text"
                hintText="Enter your username"
                floatingLabelText="Verify Password"
                value={this.state.username}
                onChange={this.onChange}
              />
              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
              <br />
              <TextField
                type="password"
                hintText="Enter your password"
                floatingLabelText="Verify Password"
                value={this.state.password}
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
