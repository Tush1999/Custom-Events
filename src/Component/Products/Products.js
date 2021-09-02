import React, { Component } from "react";
import "./style.css";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { selectIndex: null };
  }
  handleAdd = () => {
    this.props.addCart(this.props.index);
  };
  render() {
    return (
      <>
        <div className="parent-div">
          <div>
            <div className="Product-div">
              <img
                src={require(`../../images/${this.props.products.image}`).default}
                alt={this.props.products.image}
                key={this.props.index}
                height={200}
              />
              <div>
                <p className="name">{this.props.products.name}</p>
                <p className="price">${this.props.products.price}</p>
                <p className="storage">({this.props.products.storage})</p>
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
