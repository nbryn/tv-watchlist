import React, { Component } from "react";
import SeriesItem from "./SeriesItem";
import NewSeriesButton from "./NewSeriesButton";
import { connect } from "react-redux";
import { getSeries } from "../../actions/seriesActions";
import PropTypes from "prop-types";

class SeriesMain extends Component {
  componentDidMount() {
    this.props.getSeries();
  }

  render() {
    const { series } = this.props.serie;

    return (
      <div className="series">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="diplay-4 text-center">Series</h1>
              <br />
              <NewSeriesButton />
              <br />
              <hr />
              {series.map(serie => (
                <SeriesItem key={serie.id} serie={serie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SeriesMain.propTypes = {
  serie: PropTypes.object.isRequired,
  getSeries: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { serie: state.serie };
};

export default connect(
  mapStateToProps,
  { getSeries }
)(SeriesMain);
