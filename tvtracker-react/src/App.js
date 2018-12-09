import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navigation from "./components/layout/Navigation";
import AddMovie from "./components/movie/AddMovie";
import UpdateMovie from "./components/movie/UpdateMovie";
import AddSeries from "./components/series/AddSeries";
import UpdateSeries from "./components/series/UpdateSeries";
import AddTvShow from "./components/tvshow/AddTvShow";
import UpdateTvShow from "./components/tvshow/UpdateTvShow";
import MovieMain from "./components/movie/MovieMain";
import SeriesMain from "./components/series/SeriesMain";
import TvShowMain from "./components/tvshow/TvShowMain";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Navigation />
            <Route exact path="/movieMain" component={MovieMain} />
            <Route exact path="/seriesMain" component={SeriesMain} />
            <Route exact path="/tvShowMain" component={TvShowMain} />
            <Route exact path="/addMovie" component={AddMovie} />
            <Route exact path="/updateMovie/:id" component={UpdateMovie} />
            <Route exact path="/addSeries" component={AddSeries} />
            <Route exact path="/updateSeries/:id" component={UpdateSeries} />
            <Route exact path="/addTvShow" component={AddTvShow} />
            <Route exact path="/updateTvShow/:id" component={UpdateTvShow} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
