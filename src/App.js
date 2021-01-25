import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import TopDestinations from "./components/TopDestinations/TopDestinations";
import Products from "./components/Products/Products";
import MainContent from "./components/MainContent/MainContent";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import { Link } from "react-scroll";

function App() {
  return (
    // All this is my Landing page
    <div className="Landing" id="Landing">
      <div class="hero-image">
        <NavBar />
        <h1>Stay & Vacay</h1>
        <div className="explore-button">
          {/* Smoothe Scroll */}
          <Link
            activeClass="active"
            to="TopDestinations"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            type="button"
          >
            Explore
          </Link>
        </div>
      </div>

      <TopDestinations />
      <MainContent />
      <Products />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
