import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { SET_USER } from "./actions/ActionTypes";
import store from "./store";
import jwt_decode from "jwt-decode";
import Main from "./components/main/Main";
import MovieMain from "./components/main/MovieMain";
import SeriesMain from "./components/main/SeriesMain";
import TvShowMain from "./components/main/TvShowMain";
import setToken from "./security/setToken";
import SecureRoute from "./security/SecureRoute";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import { signOut } from "./actions/UserActions";
import TopNavigation from "./components/layout/TopNavigation";
import Landing from "./components/layout/Landing";
import SideNavigation from "./components/layout/SideNavigation";
import AddVideoProd from "./components/videoProduction/AddVideoProd";
import UpdateVideoProd from "./components/videoProduction/UpdateVideoProd";

const token = localStorage.jwtToken;

if (token) {
  setToken(token);
  const decodedToken = jwt_decode(token);
  store.dispatch({
    type: SET_USER,
    payload: decodedToken
  });

  const current = Date.now() / 1000;
  if (decodedToken.exp < current) {
    store.dispatch(signOut());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <TopNavigation />
            <SideNavigation />

            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />

            <Switch>
              <SecureRoute exact path="/main" component={Main} />
              <SecureRoute
                exact
                path="/addVideoProd"
                component={AddVideoProd}
              />
              <SecureRoute exact path="/movieMain" component={MovieMain} />
              <SecureRoute exact path="/seriesMain" component={SeriesMain} />
              <SecureRoute exact path="/tvShowMain" component={TvShowMain} />
              <SecureRoute
                exact
                path="/updateVideoProd/:id"
                component={UpdateVideoProd}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
