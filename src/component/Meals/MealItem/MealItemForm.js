import React from 'react'
import Input from '../../UI/Input/Input'
import classes from './MealItemForm.module.css'

function MealItemForm(props) {
  return (
        <form className={classes.form}>
            <Input name="Amount" input={{
                id: "amount",
                type: "number",
                min: 1,
                max: 5,
                defaultValue: 1
            }}/>
            <button>+ Add</button>
        </form>
  )
}

export default MealItemForm