import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Landing extends Component {
  componentDidMount() {
    if (this.props.user.validToken) {
      this.props.history.push("/main");
    }
  }

  render() {
    return (
      <header>
        <div className="nbryn">
          <div className="container d-flex h-500 align-items-center">
            <div className="mx-auto text-center">
              <h1 className="mx-auto my-0 text-uppercase">TV-Watchlist</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                A free app where you can track Movies, Series and TV-Shows
              </h2>

              <Link className="btn btn btn-lg btn-secondary" to="/signup">
                Sign up
              </Link>

              <Link className="btn btn btn-lg btn-default" to="/signin">
                Sign in
              </Link>
            </div>
          </div>
        </div>

        <footer className="bg-black small text-center text-white-50">
          <div className="container">
            Copyright &copy; Niklas Brynfeldt 2018
          </div>
        </footer>
      </header>
    );
  }
}

Landing.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Landing);
