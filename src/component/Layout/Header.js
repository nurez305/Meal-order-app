import {Fragment} from 'react'
import classes from './Header.module.css'
import BgImage from '../../Asset/meals.jpg'

function Header() {
  return (
    <Fragment>
        <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
        <img src={BgImage} alt="banner bg"/>
        </div>
    </Fragment>
  )
}

export default Header