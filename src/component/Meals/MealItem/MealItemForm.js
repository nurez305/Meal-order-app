import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const amountConversion = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      amountConversion < 1 ||
      amountConversion > 5
    ) {
      setIsValid(false);
      return;
    }
    props.onAddItemPrice(amountConversion)
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        name="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>please enter a valid amount</p>}
    </form>
  );
}

export default MealItemForm;
