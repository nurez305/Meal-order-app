import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [checkForm, setCheckForm] = useState(false)
  

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  function cartItemRemove(id) {
    cartCtx.removeItem(id)
  }

  function cartItemAdd(item) {
    cartCtx.addItem({...item, amount: 1})
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalButton = (
    <div className={classes.actions}>
    <button className={classes["button--alt"]} onClick={props.onCarthide}>
      Close
    </button>
    {hasItem && <button className={classes.button} onClick={orderCheckout}>Order</button>}
  </div>
  )

  function orderCheckout(){
    setCheckForm(true)
  }
  return (
    <Modal onCarthide={props.onCarthide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
     {checkForm && <Checkout onCancel={props.onCarthide}/>}
      {!checkForm && modalButton}
    </Modal>
  );
}

export default Cart;
