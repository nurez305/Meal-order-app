import React, {useContext, useState, useEffect} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext)
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const {items} = cartCtx

  const numberOfCartitems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount
  },0)

  useEffect(()=>{
    if(items.length === 0){
      return
    }else{
    setBtnIsHighlighted(true)
    }

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false)
    },300)

    return ()=>{
      clearTimeout(timer )
    }
  },[items])

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`

  return (
    <button className={btnClasses} onClick={props.onOpen}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span className={classes.remove}>Your Cart</span>
        <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  )
}

export default HeaderCartButton