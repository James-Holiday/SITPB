import React, { Component } from "react";
import { Link } from "react-router-dom";

import CP from "../PICS/22405648_508752749486144_5875770358194510029_n.jpg";

export default class Contact extends Component {
  render() {
    return (
      <div className="contactInfo">
        <h1>Somewhere in Time Photo Booth LLC</h1>
        <h2>somewhereintimephotobooth@gmail.com</h2>
        <h2>Call (801) 471-3752</h2>
        <h2>
          Check us out on Facebook
          https://www.facebook.com/SomewhereInTimePhotoBooth/
        </h2>
        <div className="ContactPagePic">
          <img src={CP} />
        </div>
      </div>
    );
  }
}
