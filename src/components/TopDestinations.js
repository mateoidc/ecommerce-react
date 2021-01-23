import React, { Component } from "react";
import "../components/TopDestinations.css";

class TopDestinations extends React.Component {
  render() {
    return (
      <div className="App" id="TopDestinations">
        <div id="top-destinations" class="container">
          <h2>Top Destinations</h2>

          <div class="child">
            <div class="box">
              <img class="img" src="../assets/parisnight.jpg" alt="house" />
              <h4>Paris, France</h4>
              <h4 className="h4">Learn More</h4>
            </div>

            <div class="box">
              <img class="img" src="../assets/nycnighttime.jpg" alt="house" />
              <h4>New York City, US</h4>
              <h4 className="h4">Learn More</h4>
            </div>

            <div class="box">
              <img class="img" src="../assets/japannight.jpg" alt="house" />
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
