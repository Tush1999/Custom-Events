import React, { Component } from "react";
import "./style.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { select:null };
  }
  handleAdd = () => {
    this.props.addCart(this.props.index);
  };
  render() {
    const {name,price,storage,image}=this.props.products
    return (
      <>
        <div className="parent-div" key={this.props.index}>
          <div>
            <div className="Product-div">
              <img
                src={image}
                alt={image}
                height={200}
              />
              <div>
                <p className="name">{name}</p>
                <p className="price">${price}</p>
                <p className="storage">({storage})</p>
              </div>
              <div>
                <button className="button-style" onClick={this.handleAdd}>
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
