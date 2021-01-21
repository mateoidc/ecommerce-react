import React, { Component } from "react";
import "../components/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="nav">
          <div class="news">
            <span>
              <b>News</b>
            </span>
          </div>
          <p class="text">
            <marquee direction="left">
              <span>
                • Coronavirus pandemic is going to get worse and worse and
                worse: WHO chieft
              </span>
              <span>
                &nbsp;• COVID testing required in some countries PRIOR to entry
              </span>
              <span>&nbsp;• More than 100.000 people have been vaccined</span>
              <span>&nbsp;• Scotland has gone into a 1 month lockdown</span>
            </marquee>
          </p>
        </div>
      </div>
    );
  }
}

export default NavBar;
