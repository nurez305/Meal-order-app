import { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";



const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [ error, setError] = useState(null)


  useEffect(()=>{
    async function fetchMeals(){
      setLoading(true)
      const response = await fetch('https://meal-ordering-app-1ac0a-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok){
        throw new error('something went wrong')
      }
      const responseData = await response.json()

      const loadedMeal = []
      for(const keys in responseData){
        loadedMeal.push({
          id : keys,
          name: responseData[keys].name,
          description: responseData[keys].description,
          price: responseData[keys].price
        })
      }
      setMeals(loadedMeal)
      //console.log(loadedMeal)
      setLoading(false)
    }
    fetchMeals().catch((error)=>{
      setLoading(false)
      setError(error.message)
    })
  },[error])

  if(loading){
    return <section className={classes.loading}>
            <p>Loading...</p>
           </section>
  }

  if(error) {
    
    return <section className={classes.loading}>
    <p>{error}</p>
   </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {/* {loading ? <p>Loading...</p> : <ul>{mealsList}</ul>} */}
      </Card>
    </section>
  );
};

export default AvailableMeals;
