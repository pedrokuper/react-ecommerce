import React from "react";
import "./style.scss";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      newPrice: ""
    };
  }

  handleQty(action) {
    const { qty } = this.state;
    const newQty = action == "less" ? qty - 1 : qty + 1;

    if (newQty > 0) {
      this.setState({
        qty: newQty
      });
    }
  }

  render() {
    const { img, name, price } = this.props.data;
    const { qty } = this.state;
    return (
      <div className="item-container">
        <div className="img-container">
          <img className="img" src={img}></img>
        </div>
        <div className="info-container">
          <p>{name}</p>
          <p>${price * qty}</p>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleQty("less")} className="btn-style">
            -
          </button>
          <span>{this.state.qty}</span>
          <button onClick={() => this.handleQty("more")} className="btn-style">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
