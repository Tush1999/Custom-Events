import React, { Component } from "react";

export default class Cart extends Component {
  handleDelete = (x) => {
    this.props.deleteCart(x);
  };

  render() {
    var a = this.props.items.map((value) => {
      return (
        <>
          <div className="cart-item">
          <img
            src={require(`../../images/${value.image}`).default}
            alt={value.name}
            height={70}
            key={value.name}
          />
          <p className="cart-text">{value.name} ${value.price} {value.storage}</p>
          <div>
          <button className="remove-button" onClick={() => this.handleDelete(value.id)}>
            REMOVE</button>
          </div>
          
          </div>
        </>
      );
    });

    return <div>{a}</div>;
  }
}
