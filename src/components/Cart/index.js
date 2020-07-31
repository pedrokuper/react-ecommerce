import React from "react";
import Item from "../Item";
import Total from "../Total";
import "./style.scss";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0
    };
  }

  componentWillMount() {
    const { products } = this.props;

    let totalPrice = 0;

    products.map((product) => {
      totalPrice = totalPrice + product.price;
    });

    this.setState({
      totalPrice: totalPrice
    });
  }

  render() {
    const { products } = this.props;
    const { totalPrice } = this.state;
    return (
      <div>
        {products.map((product, key) => {
          return <Item key={key} data={product} />;
        })}
        <Total totalPrice={totalPrice} />
      </div>
    );
  }
}

export default Cart;
