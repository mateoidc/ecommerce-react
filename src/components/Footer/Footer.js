import React, { Component } from "react";
import "../Footer/Footer.css";
import { Link } from "react-scroll";

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
                {/* <h3 className="h3footer">Stay & Vacay &copy;</h3> */}

                <div class="links">
                  <Link
                    activeClass="active"
                    to="Landing"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    type="button"
                    className="linkys"
                  >
                    Home
                  </Link>
                  <br></br>
                  <Link
                    activeClass="active"
                    to="Products"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    type="button"
                    className="linkys"
                  >
                    Products
                  </Link>
                  <br></br>
                  <Link
                    activeClass="active"
                    to="Form"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    type="button"
                    className="linkys"
                  >
                    Contact
                  </Link>
                </div>
                <h6 className="socialmedia">Instagram</h6>
                <h6 className="socialmedia">Twitter</h6>
                <h6 className="socialmedia">Facebook</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
