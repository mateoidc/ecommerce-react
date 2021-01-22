import React, { Component } from "react";
import data from "../products.json";
import "../components/Products.css";

// Creating constructor to render fresh new set of data whenever the state is mutated

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Grabbing products from JSON file

      initialData: data.products,
    };
  }
  render() {
    //   Importing JSON file as the key products
    return (
      <>
        <button className="filter-button">Filter</button>
        {this.state.initialData.map((product) => {
          return (
            <div className="container1">
              <img src={product.image}></img>
              <h5 className="destination">{product.destination}</h5>
              <h5>{product.description}</h5>
              <h5>{product.price}</h5>
              <h5 className="button">Learn More</h5>
            </div>
          );
        })}
        ;
      </>
    );
  }
}

export default Products;
