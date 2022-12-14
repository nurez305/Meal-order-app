import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)

  const numberOfCartitems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount
  },0)

  return (
    <button className={classes.button} onClick={props.onOpen}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  )
}

export default HeaderCartButton