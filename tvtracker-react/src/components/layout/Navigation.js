import React, { Component } from "react";
import { SideNav, Nav } from "react-sidenav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieMain from "../movie/MovieMain";
import SeriesMain from "../series/SeriesMain";
import TvShowMain from "../tvshow/TvShowMain";
import "./navigation.css";

class Navigation extends Component {
  state = { selectedPath: "" };

  onItemSelection = arg => {
    this.setState({ selectedPath: arg.path });
  };

  render() {
    return (
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
  }
}

export default Navigation;
