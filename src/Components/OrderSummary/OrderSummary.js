import React from "react";
import PropTypes from "prop-types";

function OrderSummary(props) {
  let handleOrder = () => {
    let add = 0;
    for (let item of props.order) {
      add += parseInt(item.price);
    }
    props.amount(add);
  };
  return (
    <button onClick={handleOrder} className="order-button">
      ORDER
    </button>
  );
}
export default OrderSummary;

OrderSummary.propTypes = {
  order: PropTypes.array,
};
