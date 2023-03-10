import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import Movies from "./pages/Movies";
import AddMovieForm from "./pages/AddMovie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Stocks from "./pages/Stocks";
import Industries from "./pages/Industries";
import IndustryCountry from "./pages/IndustryCountry";
// import MovieForm from './components/movieForm';

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Axios from "axios";

Axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "https://stock-app-backend-v2.vercel.app";

console.log("BASE URL = " + process.env.REACT_APP_BASE_URL);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App d-flex w-100 h-100 text-center text-bg-dark">
            <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
              <Navbar />
              <main class="px-3 text-center">
                <Switch>
                  <Route exact path="/movies/new" component={AddMovieForm} />
                  <Route exact path="/login" component={Login} />
                  <Route path="/resigter" component={Register} />
                  <Route path="/movies" exact component={Movies} />
                  <Route path="/stocks" exact component={Stocks} />
                  <Route
                    path="/country/:country"
                    exact
                    component={Industries}
                  />
                  <Route
                    path="/industrycountry/:country/:industry"
                    exact
                    component={IndustryCountry}
                  />
                  <Redirect exact from="/" to="/stocks" />
                </Switch>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
