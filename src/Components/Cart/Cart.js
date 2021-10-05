import React from "react";
import PropTypes from "prop-types";

export default function Cart({ items, deleteItem }) {
  let handleDelete = (id) => {
    deleteItem(id);
  };
  var cartItems = items.map((value, index) => {
    return (
      <div className="cart-item" key={index}>
        <img src={value.image} alt="iphone" className="cart-image" />
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
Cart.propTypes = {
  items: PropTypes.array,
  handleDelete: PropTypes.func,
};
