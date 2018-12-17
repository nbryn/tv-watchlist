import React, { Component } from "react";
import VideoProdItem from "../components/videoProduction/VideoProdItem";
import NewVideoProdButton from "./videoProduction/NewVideoProdButton";
import { connect } from "react-redux";
import { getMovies } from "../actions/MovieActions";
import PropTypes from "prop-types";

class MovieMain extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    const { movies } = this.props.movie;

    return (
      <div className="videoprod">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="diplay-4 text-center">Movies</h1>
              <br />
              <NewVideoProdButton />
              <br />
              <hr />
              {movies.map(videoProd => (
                <VideoProdItem key={videoProd.rating} videoProd={videoProd} />
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
