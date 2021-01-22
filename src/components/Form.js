import React, { Component } from "react";
import "../components/Form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="App" id="Form">
        <form>
          <h5 class="form">Get in Touch!</h5>
          <input
            name="name"
            type="text"
            class="feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            class="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Comment"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default Form;
