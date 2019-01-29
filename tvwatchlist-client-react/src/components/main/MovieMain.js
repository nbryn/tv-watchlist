import React, { Component } from "react";
import VideoProdItem from "../../components/videoProduction/VideoProdItem";
import NewVideoProdButton from "../videoProduction/NewVideoProdButton";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movieActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MovieMain extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props.movie;

    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="h1">
                <h2 className="diplay-4">Movies</h2>
              </div>
              <br />
              <NewVideoProdButton />
              <Link to="/movie" className="btn btn-md btn-primary h">
                Movies
              </Link>
              <Link to="/series" className="btn btn-md btn-primary k">
                Series
              </Link>
              <Link to="/tvshow" className="btn btn-md btn-primary j">
                TvShows
              </Link>
              <br />
              <hr align="left" width="40.5%" />
              {movies.map(videoProd => (
                <VideoProdItem key={videoProd.id} videoProd={videoProd} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieMain.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { movie: state.movie };
};

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieMain);
