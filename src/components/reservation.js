import React, { Component } from "react";

export default class Reservation extends Component {
  render() {
    return (
      <div className="reserve">
        <form>
          <div>
            <label>
              First Name:
              <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input type="text" name="last name" />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="text" name="Email" />
            </label>
          </div>
          <div>
            <label>
              Date and Time Requested:
              <input type="text" name="date and time" />
            </label>
          </div>
          <div>
            <label>
              Phone Number:
              <input type="text" name="phone" />
            </label>
          </div>
          <select>
            <option selected value="wedding">
              Wedding
            </option>
            <option value="graduation">Graduation</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="other">Other</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <div className="Resfooter">
          <h5 className="h5">~Somewhere in Time Photo Booth Inc.~</h5>
        </div>
      </div>
    );
  }
}
