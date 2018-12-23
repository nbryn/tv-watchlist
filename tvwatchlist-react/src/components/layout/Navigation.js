import React, { Component } from "react";
import { SideNav, Nav } from "react-sidenav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./navigation.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Navigation extends Component {
  state = { selectedPath: "" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    const { validToken, user } = this.props.user;

    const isAuthenticated = (
      <SideNav
        selectedPath={this.state.selectedPath}
        onItemSelection={this.onItemSelection}
      >
        <Nav id={"1"}>
          <Link to="/movieMain">Movies</Link>
        </Nav>
        <Nav id={"2"}>
          <Link to="/seriesMain">Series</Link>
        </Nav>
        <Nav id={"3"}>
          <Link to="/tvShowMain">Tv-Shows</Link>
        </Nav>
      </SideNav>
    );

    let navLinks;

    if (validToken && user) {
      navLinks = isAuthenticated;
    }

    return <SideNav />;
  }
}

Navigation.PropTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Navigation);
