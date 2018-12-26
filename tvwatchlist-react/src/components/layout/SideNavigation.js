import React, { Component } from "react";
import { SideNav, Nav } from "react-sidenav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
      <nav class="navbar navbar-default" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <a id="menu-toggle" href="#" class="navbar-toggle" />
          </div>
          <div id="sidebar-wrapper" class="sidebar-toggle">
            <ul class="sidebar-nav">
              <li>
                <a href="#item1">Movies</a>
              </li>
              <li>
                <a href="#item2">Series</a>
              </li>
              <li>
                <a href="#item3">TV-Shows</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
