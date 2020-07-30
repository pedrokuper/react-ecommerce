import React from "react";
import "./App.scss";
import Checkout from "./components/Checkout";
import Button from "./components/Button";
import products from "./data/products.json";
import Cart from "./components/Cart";





class App extends React.Component {

  
  render() {
    return (
      <div className="container">
        <Checkout />
        <Cart products={products} />
      </div>
    );
  }
}

export default App;
