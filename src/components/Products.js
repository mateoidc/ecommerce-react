import React, { Component } from "react";
import data from "../products.json";
import "../components/Products.css";

// Creating constructor to render fresh new set of data whenever the state is mutated

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Grabbing products from JSON file

      products: data.products,
    };
  }

  // Function to handle filter clicks
  // ASC = Lowest to greatest
  // Definining compartive function, compares 2 elements together and returns the lesser of the elements
  ascPriceHandler = () => {
    const sortByPrice = (a, b) => a.price - b.price;
    // grabbing the current state and then sorting based on the comparative function
    const sortedProductsMap = [...this.state.products].sort(sortByPrice);
    this.setState({ products: sortedProductsMap });
  };

  // Highest to low function comparative
  descPriceHandler = () => {
    const sortByPrice = (a, b) => b.price - a.price;
    // grabbing the current state and then sorting based on the comparative function
    const sortedProductsMap = [...this.state.products].sort(sortByPrice);
    this.setState({ products: sortedProductsMap });
  };

  alphabeticalOrder = () => {
    const sortByType = (a, b) => {
      const countryA = a.country;
      const countryB = b.country;
      if (countryA < countryB) {
        return -1;
      }
      if (countryA > countryB) {
        return 1;
      }
      return 0;
    };
    const sortedProductsMap = [...this.state.products].sort(sortByType);
    this.setState({
      products: sortedProductsMap,
    });
  };

  render() {
    //   Importing JSON file as the key products
    return (
      <>
        <div className="filter-container">
          <button onClick={this.alphabeticalOrder} className="filter-button">
            Filter by (Country A-Z)
          </button>
          <button onClick={this.ascPriceHandler} className="filter-button">
            Filter by (Lowest to Highest)
          </button>

          <button onClick={this.descPriceHandler} className="filter-button">
            Filter by (Lowest to Highest)
          </button>
        </div>
        <div className="products-container" id="Products">
          {this.state.products.map((product) => {
            return (
              <div className="container1">
                <img src={product.image}></img>
                <h5 className="destination">
                  {product.city}, {product.country}
                </h5>
                <h5>{product.description}</h5>
                <h5>{product.price}</h5>
                <h5 className="button">Learn More</h5>
              </div>
            );
          })}
        </div>
        ;
      </>
    );
  }
}

export default Products;
