import React, { Component } from "react";
import VideoProdItem from "../../components/videoProduction/VideoProdItem";
import NewVideoProdButton from "../videoProduction/NewVideoProdButton";
import { connect } from "react-redux";
import { getAll } from "../../actions/VideoProdActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { videoProds } = this.props.videoProd;

    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="h1">
                <h2 className="diplay-4 text-left">All</h2>
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
              {videoProds.map(videoProd => (
                <VideoProdItem key={videoProd.id} videoProd={videoProd} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  videoProd: PropTypes.object.isRequired,
  getAll: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { videoProd: state.videoProd };
};

export default connect(
  mapStateToProps,
  { getAll }
)(Main);
