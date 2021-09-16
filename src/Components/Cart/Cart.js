import React from "react";

export default function Cart({ items, deleteCart }) {
  let handleDelete = (id) => {
    deleteCart(id);
  };
  var cartItems = items.map((value, index) => {
    return (
      <div className="cart-item" key={index}>
        <img src={value.image} alt={value.name} height={70} />
        <p className="cart-text">
          {value.name} ${value.price} {value.storage}
        </p>
        <div>
          <button
            className="remove-button"
            onClick={() => handleDelete(value.identity)}
          >
            REMOVE
          </button>
        </div>
      </div>
    );
  });

  return <div>{cartItems}</div>;
}
