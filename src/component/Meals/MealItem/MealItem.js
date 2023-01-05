import React, {useContext} from 'react'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem(props) {
    const price = `₦${props.price.toFixed(2)}`
    const cartCtx = useContext(CartContext)

    function addItemCart(amount){
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    }

  return (
    <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>

        <div>
            <MealItemForm onAddItemPrice={addItemCart}/>
        </div>
    </li>
  )
}

export default MealItem