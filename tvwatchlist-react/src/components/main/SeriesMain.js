import React, { Component } from "react";
import VideoProdItem from "../../components/videoProduction/VideoProdItem";
import NewVideoProdButton from "../videoProduction/NewVideoProdButton";
import { connect } from "react-redux";
import { getSeries } from "../../actions/SeriesActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SeriesMain extends Component {
  componentDidMount() {
    this.props.getSeries();
  }

  render() {
    const { series } = this.props.series;

    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="h1">
                <h2 className="diplay-4">Series</h2>
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
                TV-Shows
              </Link>
              <br />
              <hr align="left" width="42.5%" />
              {series.map(videoProd => (
                <VideoProdItem key={videoProd.id} videoProd={videoProd} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SeriesMain.propTypes = {
  series: PropTypes.object.isRequired,
  getSeries: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { series: state.series };
};

export default connect(
  mapStateToProps,
  { getSeries }
)(SeriesMain);
