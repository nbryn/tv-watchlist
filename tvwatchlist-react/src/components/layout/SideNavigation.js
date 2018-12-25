import React, { Component } from "react";
import { SideNav, Nav } from "react-sidenav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./navigation.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SideNavigation extends Component {
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

    const notAuthenticated = (
      <SideNav
        selectedPath={this.state.selectedPath}
        onItemSelection={this.onItemSelection}
      />
    );

    let sideNavLinks;

    if (validToken && user) {
      sideNavLinks = isAuthenticated;
    } else {
      sideNavLinks = notAuthenticated;
    }

    return (
      <SideNav
        selectedPath={this.state.selectedPath}
        onItemSelection={this.onItemSelection}
      >
        {sideNavLinks}
      </SideNav>
    );
  }
}

SideNavigation.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(SideNavigation);
