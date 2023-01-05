import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import loadingGIF from "../../Asset/success_animation.gif"


function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [checkForm, setCheckForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  

  const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;
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

  const modalItem = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
     {checkForm && <Checkout onCancel={props.onCarthide} onConfirm={submitOrder}/>}
      {!checkForm && modalButton}
    </>
  )

  const loading = <p>Order is submitting...</p>

  const submittedOrder = (
        <>
        <div className={classes.success}>
        <img className={classes.imgsuccess} src={loadingGIF} alt="success"/>
        <p>Order is successfully submitted!!</p>

        <div className={classes.actions}>
        <button className={classes.button} onClick={props.onCarthide}>
      Close
    </button>
    </div>
        </div>
        {/* <div className={classes.actions}>
        <button className={classes.button} onClick={props.onCarthide}>
      Close
    </button>
    </div> */}
        </>
  )

  async function submitOrder(userdata){
    setIsLoading(true)
    await fetch('https://meal-ordering-app-1ac0a-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST', 
      body: JSON.stringify({
        user: userdata,
        orderItem : cartCtx.items
      })
    })
    setIsLoading(false)
    setSubmitted(true)
    cartCtx.clearCart()
  }

  function orderCheckout(){
    setCheckForm(true)
  }
  return (
    <Modal onCarthide={props.onCarthide}>
    {!isLoading && !submitted && modalItem && modalItem}
    {isLoading && !submitted && loading}
    {submitted && submittedOrder}
    </Modal>
    
  );
}

export default Cart;
