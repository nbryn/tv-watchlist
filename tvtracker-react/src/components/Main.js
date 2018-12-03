import React, { Component } from "react";
import MovieItem from "./movie/MovieItem";
import NewMovieButton from "./movie/NewMovieButton";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import PropTypes from "prop-types";

class Main extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <div className="Movies">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="diplay-4 text-center">Movies</h1>
              <br />
              <NewMovieButton />
              <br />
              <hr />
              <MovieItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(
  mapStateToProps,
  { getMovies }
)(Main);
