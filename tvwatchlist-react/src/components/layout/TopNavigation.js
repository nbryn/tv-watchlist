import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { signOut } from "../../actions/UserActions";
import { connect } from "react-redux";

class TopNavigation extends Component {
  signOut() {
    this.props.signOut();
    window.location.href = "/";
  }
  render() {
    const { validToken, user } = this.props.user;

    const isAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <div className="nav-wrapper">
          <ul className="navbar-nav mr-auto" />

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/main">
                <i className="fas fa-user-circle mr-1" />
                {user.fullName}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signout"
                onClick={this.signOut.bind(this)}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );

    const notAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    );

    let topNavLinks;

    if (validToken && user) {
      topNavLinks = isAuthenticated;
    } else {
      topNavLinks = notAuthenticated;
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            TV-Watchlist
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {topNavLinks}
        </div>
      </nav>
    );
  }
}

TopNavigation.propTypes = {
  signOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { signOut }
)(TopNavigation);
