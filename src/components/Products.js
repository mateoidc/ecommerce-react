import React, { Component } from "react";
import data from "../products.json";
import "../components/Products.css";

class Products extends Component {
  render() {
    //   Importing JSON file as the key products

    return data.products.map((product) => {
      return (
        <div className="container1">
          <img src={product.image}></img>
          <h5 className="destination">{product.destination}</h5>
          <h5>{product.description}</h5>
          <h5>{product.price}</h5>
          <h5 className="button">Learn More</h5>
        </div>
      );
    });
  }
}

export default Products;
