import React, { Component } from "react";
import { Link } from "react-router-dom";

import CP from "../PICS/22289624_506843233010429_7770978378955726630_o.jpg";

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
