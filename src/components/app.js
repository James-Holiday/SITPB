import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavCom from "./nav/nav-con";
import Home from "./home";
import Booth from "./booth";
import Reservation from "./reservation";
import Blog from "./blog";
import Contact from "./contact";

import logo from "../PICS/logo2.png";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={logo} />
        <Router>
          <div>
            {/* <hr className="HR" /> */}
            <NavCom />
            {/* <hr className="HR" /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/booth" component={Booth} />
              <Route path="/reservation" component={Reservation} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
