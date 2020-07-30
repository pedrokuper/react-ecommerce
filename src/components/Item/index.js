import React from "react";
import "./style.scss";

class Item extends React.Component {
  render() {
    const { img, name, price } = this.props.data;
    return (
      <div className="item-container">
        <div className="img-container">
          <img className="img" src={img}></img>
        </div>
        <div className="info-container">
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div className="buttons">
            <button className="btn-style">+</button>
            <span>1</span>
            <button className="btn-style">-</button>
        </div>
      </div>
    );
  }
}

export default Item;
