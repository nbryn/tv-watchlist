import React, { Component } from "react";
import TvShowItem from "./TvShowItem";
import NewTvShowButton from "./NewTvShowButton";
import { connect } from "react-redux";
import { getTvShows } from "../../actions/tvShowActions";
import PropTypes from "prop-types";

class TvShowMain extends Component {
  componentDidMount() {
    this.props.getTvShows();
  }

  render() {
    const { tvShows } = this.props.tvShow;

    return (
      <div className="tvshow">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="diplay-4 text-center">Tv-Shows</h1>
              <br />
              <NewTvShowButton />
              <br />
              <hr />
              {tvShows.map(tvShow => (
                <TvShowItem key={tvShow.id} tvShow={tvShow} />
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
