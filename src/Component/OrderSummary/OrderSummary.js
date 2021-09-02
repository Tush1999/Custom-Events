import React, { Component } from "react";

export default class OrderSummary extends Component {

  sum = 0;
  handleOrder = () => {
    let add = 0;
    for (let val of this.props.order) {
      add += parseInt(val.price);
    }
    this.props.amount(add);
  };
  render() {
    return (
      <>
        <button onClick={this.handleOrder} className="order-button">ORDER</button>
         
      </>
    );
  }
}
