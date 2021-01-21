import React, { Component } from "react";
import "../components/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <section></section>
        <div class="footer">
          <div id="button"></div>
          <div id="container">
            <div id="cont">
              <div class="footer_center">
                <h3 className="h3footer">Stay & Vacay &copy;</h3>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-google"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
