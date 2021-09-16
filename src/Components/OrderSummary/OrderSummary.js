import React from "react";

function OrderSummary(props) {
  let handleOrder = () => {
    let add = 0;
    for (let val of props.order) {
      add += parseInt(val.price);
    }
    props.amount(add);
  };
  return <button onClick={handleOrder} className="order-button">ORDER</button>;
  
}
export default OrderSummary