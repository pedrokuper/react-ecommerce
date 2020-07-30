import React from "react";
import Item from "../Item";

class Cart extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product, key) => {
          return <Item key={key} data={product} />;
        })}
      </div>
    );
  }
}

export default Cart;
