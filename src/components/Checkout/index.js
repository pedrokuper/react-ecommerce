import React from "react";
import "./style.scss";
import Button from "../Button";
class Checkout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h2 className="title--checkout">Checkout</h2>
        <div className="checkout-section">
          <h3 className="title--contact-information">Contact information</h3>
          <div className="form--wrapper">
            <label>
              E-mail
              <input
                className="form--input"
                type="email"
                name="email"
                placeholder="Enter your email..."
              ></input>
            </label>
            <label>
              Phone
              <input
                className="form--input"
                type="number"
                name="phone"
                placeholder="Enter your phone..."
              ></input>
            </label>
          </div>

          <h3 className="title--contact-information">Shipping Adress</h3>
          <div className="form--wrapper">
            <label>
              Full name
              <input
                className="form--input"
                name="name"
                placeholder="Your full name..."
              ></input>
            </label>
            <label>
              Adress
              <input
                className="form--input"
                type="text"
                placeholder="Your adress..."
              ></input>
            </label>
            <label>
              City
              <input
                className="form--input"
                type="text"
                placeholder="Your city..."
              ></input>
            </label>

            <div class="side-inputs">
              <div class="input--child">
                <label>
                  Country
                  <select className="form--input">
                    <option disabled selected>
                      Select your country...
                    </option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                  </select>
                </label>
              </div>
              <div class="input--child">
                <label>
                  Postal Code
                  <input className="form--input" type="number"></input>
                </label>
              </div>
            </div>
            <div className="checkbox--input">
              <label>
                <input className="form--checkbox" type="checkbox"></input>
                Save this information for next time
              </label>{" "}
            </div>
          </div>
        </div>
        <div className="button">
          <Button />
        </div>
      </div>
    );
  }
}

export default Checkout;
