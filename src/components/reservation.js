import React, { Component } from "react";

class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      date: "",
      event: "",
      editMode: false,
      apiUrl: "https://sitbk.herokuapp.com/",
      apiAction: "post"
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }
  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }
  handleEventChange(event) {
    this.setState({ event: event.target.value });
  }

  handleSubmit(event) {
    alert("A Reservation was submitted: " + this.state.name);
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      date: this.state.date,
      event: this.state.event
    };

    fetch("https://sitbk.herokuapp.com/reservations/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        date: this.state.date,
        event: this.state.event
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label className="font">
            Name:
            <input
              className="input"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
        </div>
        <div>
          <label className="font">
            Email:
            <input
              className="input"
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
        </div>
        <div>
          <label className="font">
            Phone Number:
            <input
              className="input"
              type="text"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            />
          </label>
        </div>
        <div>
          <label className="font">
            Date and Time Requested:
            <input
              className="input"
              type="text"
              value={this.state.date}
              onChange={this.handleDateChange}
            />
          </label>
        </div>

        <select
          className="selector"
          value={this.state.event}
          onChange={this.handleEventChange}
        >
          <option selected value="wedding">
            Wedding
          </option>
          <option value="graduation">Graduation</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="other">Other</option>
        </select>
        <input className="Submitor" type="submit" value="Submit" />
      </form>
    );
  }
}

export default Reservation;
