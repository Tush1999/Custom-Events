import React, { Component } from "react";
import "./style.css";

import PropTypes from "prop-types";
const { v4: uuid_v4 } = require("uuid");

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { select: null };
  }
  handleCart = () => {
    this.props.addItem(this.props.index);
  };
  render() {
    const { name, price, storage, image } = this.props.item;
    return (
      <>
        <div className="parent-div" key={uuid_v4()}>
          <div>
            <div className="Product-div">
              <img src={image} alt="iphone" className="product-image" />
              <div>
                <p className="name">{name}</p>
                <p className="price">${price}</p>
                <p className="storage">({storage})</p>
              </div>
              <div>
                <button className="button-style" onClick={this.handleCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Products.propTypes = {
  products: PropTypes.object,
};
