import React, { Component } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import OrderSummary from "../OrderSummary/OrderSummary";
const { v4: uuid_v4 } = require("uuid");

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      sum: 0,
      total: "",
    };
  }
  addCart = (product_id) => {
    var item = this.props.products.filter((val) => val.id === product_id);
    let cartItem = { ...item[0], identity: uuid_v4() };
    this.setState(
      (state) => ({ cart: [...state.cart, cartItem] }),
      this.updateCart
    );
  };
  deleteCart = (product_id) => {
    var cartItem = this.state.cart.filter((val) => val.identity !== product_id);
    this.setState((state) => ({ cart: [...cartItem] }), this.updateCart);
  };
  amount = (sum) => {
    this.setState(() => ({ sum: sum }), this.handleOrder);
  };
  updateCart = () => {
    let add = 0;
    for (let val of this.state.cart) {
      add += parseInt(val.price);
    }
    this.setState({ total: add });
  };
  handleOrder = () => {
    this.setState({ sum: 0 });
  };
  render() {
    if (this.state.sum) {
      alert(
        `Your order has been placed of Rs${this.state.sum} and total item - ${this.state.cart.length}`
      );
    }
    var Product = this.props.products.map((value, index) => {
      return (
        <>
          <Products
            products={value}
            index={index}
            addCart={this.addCart}
            key={index}
          />
        </>
      );
    });
    return (
      <React.Fragment>
        <div className="flex">
          <div className="main-div">{Product}</div>
          <div className="right-div">
            <div className="cart-div">
              {this.state.cart.length === 0 ? (
                <h1 className="title">Your Cart is empty</h1>
              ) : null}
              {this.state.total ? (
                <h1 className="title">CART: ${this.state.total}</h1>
              ) : null}
              <Cart items={this.state.cart} deleteCart={this.deleteCart} />
            </div>
          </div>
        </div>
        <OrderSummary order={this.state.cart} amount={this.amount} />
      </React.Fragment>
    );
  }
}
