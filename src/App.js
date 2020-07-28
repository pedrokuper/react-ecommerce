import React from "react";
import "./App.scss";
import Checkout from "./components/Checkout";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Checkout />
        <div className="button">
          <Button />
        </div>
        
      </React.Fragment>
    );
  }
}

export default App;
