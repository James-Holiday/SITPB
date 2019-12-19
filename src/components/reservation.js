import React, { Component } from "react";

export default class Reservation extends Component {
  render() {
    return (
      <div className="reserve">
        <form>
          <div>
            <label className="font">
              Name:
              <input className="input" type="text" name="name" />
            </label>
          </div>
          <div>
            <label className="font">
              Email:
              <input className="input" type="text" name="Email" />
            </label>
          </div>
          <div>
            <label className="font">
              Phone Number:
              <input className="input" type="text" name="phone" />
            </label>
          </div>
          <div>
            <label className="font">
              Date and Time Requested:
              <input className="input" type="text" name="date and time" />
            </label>
          </div>

          <select className="selector">
            <option selected value="wedding">
              Wedding
            </option>
            <option value="graduation">Graduation</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="other">Other</option>
          </select>
          <input className="Submitor" type="submit" value="Submit" />
        </form>
        <div className="Resfooter">
          <h5 className="h5">~Somewhere in Time Photo Booth Inc.~</h5>
        </div>
      </div>
    );
  }
}
