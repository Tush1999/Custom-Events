import React, { Component } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import OrderSummary from "../OrderSummary/OrderSummary";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Iphone 11 Pro (Silver)",
          price: "999",
          storage: "64gb",
          image: "silver.png",
          id: 0,
        },
        {
          name: "Iphone 11 Pro (Grey)",
          price: "1199",
          storage: "128gb",
          image: "grey.png",
          id: 1,
        },
        {
          name: "Iphone 11 Pro (Gold)",
          price: "1399",
          storage: "256gb",
          image: "gold.png",
          id: 2,
        },
        {
          name: "Iphone 11 Pro (Midnight)",
          price: "1599",
          storage: "512gb",
          image: "green.png",
          id: 3,
        },
      ],
      cart: [],
      sum: false,
      total: "",
    };
  }
  addCart = (x) => {
    var a = this.state.products.filter((val) => val.id === x);
    this.setState(
      (state) => ({ cart: [...state.cart, ...a] }),
      this.updateCart
    );
  };
  deleteCart = (x) => {
    var a = this.state.cart.filter((val) => val.id !== x);

    this.setState((state) => ({ cart: [...a] }), this.updateCart);
  };
  amount = (sum) => {
    this.setState({ sum: sum });
  };
  updateCart = () => {
    let add = 0;
    for (let val of this.state.cart) {
      add += parseInt(val.price);
    }
    this.setState({ total: add });
  };
  render() {
    if (this.state.sum)
      alert(
        `Your order has been placed of Rs${this.state.sum} and total item ${this.state.cart.length}`
      );
    var a = this.state.products.map((value, index) => {
      return (
        <>
          <Products products={value} index={index} addCart={this.addCart} />
        </>
      );
    });
    return (
      <React.Fragment>
        <div className="flex">
          <div className="main-div">{a}</div>
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
