import {Fragment} from 'react'
import classes from './Header.module.css'
import BgImage from '../../Asset/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
        <h1>NijaMeals</h1>
        <HeaderCartButton onOpen={props.onCartshown}/>
        </header>
        <div className={classes['main-image']}>
        <img src={BgImage} alt="banner bg"/>
        </div>
    </Fragment>
  )
}

export default Header