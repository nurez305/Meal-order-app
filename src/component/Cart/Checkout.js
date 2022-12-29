import React, {useRef, useState} from 'react'
import classes from './Checkout.module.css'


const formValid = (value) => value.trim().length !== 0
const postalValid = (value) => value.trim().length === 5


function Checkout(props) {
    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()
    const [formIsCorrect, setFormIsCorrect] =useState({
        name: true,
        street: true,
        postal: true,
        city : true
    })

    function handleCheckoutSubmit(e){
        e.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredStreet = streetInputRef.current.value
        const enteredPostal = postalInputRef.current.value
        const enteredCity = cityInputRef.current.value

        setFormIsCorrect({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        })
        
        const nameValid = formValid(enteredName)
        const streetValid = formValid(enteredStreet)
        const validPostal = postalValid(enteredPostal)
        const cityValid = formValid(enteredCity)

        const validForm = nameValid && streetValid && validPostal && cityValid

        if(!validForm) {
            return
        }
    }

    const nameClass = `${classes.control} ${!formIsCorrect.name ? classes.invalid : ""}`
    const streetClass = `${classes.control} ${!formIsCorrect.street ? classes.invalid : ""}`
    const postalClass = `${classes.control} ${!formIsCorrect.postal ? classes.invalid : ""}`
    const cityClass = `${classes.control} ${!formIsCorrect.city ? classes.invalid : ""}`


  return (
    <form onSubmit={handleCheckoutSubmit} className={classes.form}>
        <div className={nameClass}>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formIsCorrect.name && <p>Please enter your name</p>}
        </div>

        <div className={streetClass}>
            <label htmlFor='street'>Street</label>
            <input type="text" id="street" ref={streetInputRef} />
            {!formIsCorrect.street && <p>Please enter your street</p>}
        </div>

        <div className={postalClass}>
            <label htmlFor='postal'>Postal code</label>
            <input type="text" id="postal" ref={postalInputRef}/>
            {!formIsCorrect.postal && <p>postal address should be 5 digit</p>}
        </div>

        <div className={cityClass}>
            <label htmlFor='city'>City</label>
            <input type="text" id="city" ref={cityInputRef}/>
            {!formIsCorrect.city && <p>Please enter your city</p>}
        </div>
        <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
        </div>
    </form>
  )
}

export default Checkout