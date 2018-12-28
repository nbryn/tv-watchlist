import React, { Component } from "react";
import VideoProdItem from "../../components/videoProduction/VideoProdItem";
import NewVideoProdButton from "../videoProduction/NewVideoProdButton";
import { connect } from "react-redux";
import { getTvShows } from "../../actions/TvShowActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class TvShowMain extends Component {
  componentDidMount() {
    this.props.getTvShows();
  }

  render() {
    const { tvShows } = this.props.tvShow;

    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="h1">
                <h2 className="diplay-4">TV-Shows</h2>
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
              <hr align="left" width="45%" />
              {tvShows.map(videoProd => (
                <VideoProdItem key={videoProd.id} videoProd={videoProd} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TvShowMain.propTypes = {
  tvShow: PropTypes.object.isRequired,
  getTvShows: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { tvShow: state.tvShow };
};

export default connect(
  mapStateToProps,
  { getTvShows }
)(TvShowMain);
