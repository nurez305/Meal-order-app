import {Fragment} from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Header.module.css'
import BgImage from '../../Asset/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import {toast} from 'react-toastify'
// import axios from '../../Api/axios'



function Header(props) {
  const navigate = useNavigate()

function handleLogout(){
  localStorage.clear()
  navigate('/')
  toast('Successfully logout')
}

  return (
    <Fragment>
        <header className={classes.header}>
        <h1>NaijaMeals</h1>
        <div className={classes.flexbtn}>
        <HeaderCartButton onOpen={props.onCartshown}/>
        <button className={classes.logout} onClick={handleLogout}>
          logout
    </button>
        </div>
        
        </header>
        <div className={classes['main-image']}>
        <img src={BgImage} alt="banner bg"/>
        </div>
    </Fragment>
  )
}

export default Header