import React from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";


function Cart(props) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Sushi", ammount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onCarthide={props.onCarthide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCarthide}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>
  );
}

export default Cart;
