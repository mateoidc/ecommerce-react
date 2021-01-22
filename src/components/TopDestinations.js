import React, { Component } from "react";
import "../components/TopDestinations.css";

class TopDestinations extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="top-destinations" class="container">
          <h2>Top Destinations</h2>

          <div class="child">
            <div class="box">
              <img class="img" src="../assets/paris1.jpg" alt="house" />
              <h4>Paris, France</h4>
              <h4 className="h4">Learn More</h4>
            </div>

            <div class="box">
              <img class="img" src="../assets/nahyah.jpg" alt="house" />
              <h4>New York City, US</h4>
              <h4 className="h4">Learn More</h4>
            </div>

            <div class="box">
              <img class="img" src="../assets/japan1.jpg" alt="house" />
              <h4>Kyoto, Japan</h4>
              <h4 className="h4">Learn More</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopDestinations;
