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
    const { movies } = this.props.movie;

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
              {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
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

const mapStateToProps = state => {
  return { movie: state.movie };
};

export default connect(
  mapStateToProps,
  { getMovies }
)(Main);
