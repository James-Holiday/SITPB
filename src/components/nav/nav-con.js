import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavCom extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/booth">Our Booth</NavLink>
        </div>
        <div>
          <NavLink to="/blog">Photo Booth Pictures</NavLink>
        </div>
        <div>
          <NavLink to="/reservation">Reservations</NavLink>
        </div>

        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    );
  }
}
