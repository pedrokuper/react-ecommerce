import React from "react";
import "./style.scss";
class Total extends React.Component {
  render() {
    const { totalPrice } = this.props;
    return (
      <div className="cart-container">
        <p className="total">${totalPrice}</p>
      </div>
    );
  }
}

export default Total;
