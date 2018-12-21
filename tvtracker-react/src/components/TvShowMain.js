import React, { Component } from "react";
import VideoProdItem from "../components/videoProduction/VideoProdItem";
import NewVideoProdButton from "./videoProduction/NewVideoProdButton";
import { connect } from "react-redux";
import { getTvShows } from "../actions/TvShowActions";
import PropTypes from "prop-types";

class TvShowMain extends Component {
  componentDidMount() {
    this.props.getTvShows();
  }

  render() {
    const { tvShows } = this.props.tvShow;
    const buttonText = "Add Tv-Show";

    return (
      <div className="videoprod">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="diplay-4 text-center">Tv-Shows</h1>
              <br />
              <NewVideoProdButton text={buttonText} />
              <br />
              <hr />
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
