import React, { Component } from "react";
import VideoProdItem from "../../components/videoProduction/VideoProdItem";
import NewVideoProdButton from "../videoProduction/NewVideoProdButton";
import { connect } from "react-redux";
import { getAll } from "../../actions/VideoProdActions";
import PropTypes from "prop-types";

class Main extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { videoProds } = this.props.videoProd;
    const buttonText = "Add Item";

    return (
      <div className="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="diplay-4 text-left">All</h1>
              <br />
              <NewVideoProdButton text={buttonText} />
              <br />
              <hr align="left" width="57%" />
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
