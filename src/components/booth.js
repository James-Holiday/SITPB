import React, { Component } from "react";

import Boothpic from "../PICS/booth.jpg";

export default class Booth extends Component {
  render() {
    return (
      <div className="boothwraper">
        <h3 className="aboutbooth2">
          Our intuitively engineered design will allow you to take the highest
          quality photo booth pictures possible, be setup in five minutes, and
          transported in any 4 door vehicle. Fit 2-10 people comfortably in this
          booth. The record is 16!
        </h3>
        <div className="feature-wrapper">
          <div className="BP">
            <img className="boothpic" src={Boothpic} />
          </div>
          <div className="features">
            <h2>Features:</h2>
            <ul>
              <li>Canon Rebel T3 DSLR Camera</li>
              <li>
                Hiti P510L high-speed dye sublimation digital photo printer
              </li>
              <li>Amazing portability and hassle free setup</li>
              <li>20 inch touch screen interface (No ugly buttons!)</li>
              <li>Dell Inspiron 20" Touch Screen All-in-On Computer</li>
              <li>Wrinkle free instant canopy w/easy up doors</li>
              <li>Continuous full spectrum studio lighting</li>
              <li>Beautiful Red Velvet Backdrop</li>
              <li>User Interfaced customized with your business name</li>
              <li>Photo Booth Setup Video/Manual and Troubleshooting Guide</li>
              <li>Green Screen Shooting Available</li>
              <li>Video Messaging Available. Ask for more information</li>
            </ul>
          </div>
        </div>
        <div className="boothinfo">
          <h3>
            The Photo Booth canopy dimensions are 5ft x5ft x8ft (LxWxH) when
            setup and weighs 35 lbs with all the attached wrinkle free fabric.
          </h3>
        </div>
        <div className="footer">
          <h5 className="h5">~Somewhere in Time Photo Booth Inc.~</h5>
        </div>
      </div>
    );
  }
}
