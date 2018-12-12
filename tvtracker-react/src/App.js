import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navigation from "./components/layout/Navigation";
import Main from "./components/Main";
import AddVideoProd from "./components/videoProduction/AddVideoProd";
import UpdateVideoProd from "./components/videoProduction/UpdateVideoProd";
import MovieMain from "./components/MovieMain";
import SeriesMain from "./components/SeriesMain";
import TvShowMain from "./components/TvShowMain";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Navigation />
            <Route exact path="/main" component={Main} />
            <Route exact path="/addVideoProd" component={AddVideoProd} />
            <Route exact path="/movieMain" component={MovieMain} />
            <Route exact path="/seriesMain" component={SeriesMain} />
            <Route exact path="/tvShowMain" component={TvShowMain} />
            <Route
              exact
              path="/updateVideoProd/:id"
              component={UpdateVideoProd}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
