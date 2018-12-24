import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "../../actions/UserActions";

class Header extends Component {
  logout() {
    this.props.signOut();
    window.location.href = "/";
  }
  render() {
    const { validToken, user } = this.props.user;

    const isAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/main">
              Main
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/main">
              <i className="fas fa-user-circle mr-1" />
              {user.fullName}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signout">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    );

    const notAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    );

    let headerLinks;

    if (validToken && user) {
      headerLinks = isAuthenticated;
    } else {
      headerLinks = notAuthenticated;
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Personal TV Watchlist
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {headerLinks}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  signOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { signOut }
)(Header);
