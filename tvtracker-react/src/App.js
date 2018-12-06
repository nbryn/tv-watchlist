import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddMovie from "./components/movie/AddMovie";
import { Provider } from "react-redux";
import store from "./store";
import UpdateMovie from "./components/movie/UpdateMovie";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/main" component={Main} />
            <Route exact path="/addMovie" component={AddMovie} />
            <Route exact path="/updateMovie/:id" component={UpdateMovie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
