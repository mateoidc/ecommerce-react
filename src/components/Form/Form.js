import React, { Component } from "react";
import "../Form/Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    // Javascript form validation
    // 3 different state values
    //  We will be mutating the epty strings based on what were typing in
    this.state = {
      name: "",
      email: "",
      text: "",
      nameError: "",
      emailError: "",
      textError: "",
    };
  }

  // Checking to see if its falsy
  // different if statements for every value basically saying that if it isnt filled out an error will apear

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState({
        nameError: "Please fill out your name",
      });
      return;
    }
    this.setState({
      nameError: "",
    });
    if (!this.state.email) {
      this.setState({
        emailError: "Please fill out your email",
      });
      return;
    }
    this.setState({
      emailError: "",
    });
    if (!this.state.text) {
      this.setState({
        textError: "Please fill out this form",
      });
      return;
    }
    this.setState({
      textError: "",
    });
    return;
  };

  //  1 Handler for every input thats taking in an event thats setting state for that input based on the value of that event

  nameHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  emailHandler = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  textHandler = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div className="App" id="Form">
        <div className="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>

        {/* Connects it to the onSubmit function */}
        <form onSubmit={this.onSubmit}>
          <h5 class="form">Get in Touch!</h5>
          <input
            name="name"
            type="text"
            class="feedback-input"
            placeholder="Name"
            onChange={this.nameHandler}
          />
          <span className="span1">{this.state.nameError}</span>

          <input
            name="email"
            type="text"
            class="feedback-input"
            placeholder="Email"
            onChange={this.emailHandler}
          />
          <span className="span1">{this.state.emailError}</span>
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Comment"
            onChange={this.textHandler}
          ></textarea>
          <span className="span1">{this.state.textError}</span>

          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default Form;
