import React, { Component } from "react";
import NavBar from "./components/NavBar";
import TopDestinations from "./components/TopDestinations";
import Products from "./components/Products";
import MainContent from "./components/MainContent";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div class="hero-image">
        <NavBar />
        <h1>Stay & Vacay</h1>
        <button className="hero-button" type="button">
          Explore
        </button>
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
