import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from '../../Api/axios'
import classes from './Login.module.css'
import {toast} from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!email || password.trim().length === 0 ){
      return toast("email and password must not be empty")
    }
    setLoading(true)
    try { 
      const response = await axios.post('/login', {
        email,
        password,
      })
      // console.log(response)
      localStorage.setItem('token', response.data.token)
      toast(<div>{`Welcome ${response.data.name}`}</div>)
      navigate("/store")
      setLoading(false)
    } catch (error) {
      toast(<div>{error.response.data.message}</div>)
        setLoading(false)
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    
  }

  return (
  <>
{loading && (
    <div className={classes.loadingmodal}>
      <div className={classes.loading}></div>
      </div>
      )}

<form onSubmit={handleSubmit} className={classes["form_container"]}>
<div className={classes["form_head"]}>  
<h2>Naija Meals</h2>
</div>
<div className={classes.container}>
<div className={classes['form_input']}>
  <label htmlFor='email'>Email</label>
  <input
    type='email'
    autoComplete='off'
    placeholder='Enter your email'
    onChange={handleEmail}
    value={email}
    // required
  />
</div>

<div className={classes["form_input"]}>
  <label htmlFor=''>Password</label>
  <input
    type='password'
    autoComplete='off'
    placeholder='Enter your password'
    onChange={handlePassword}
    value={password}
    // required
  />
</div>

</div>
{/* <div className={classes['login_forgot']}>
  <Link to='/' className={classes.forgot}>Forgot password?</Link>
</div> */}

<button
  type='submit'
  className={classes['login_btn']}
>
  Sign In
</button>
<p className={classes['login_text']}>
  Dont have an account?{' '}
  <Link to='/register' className={classes['login_anchor']}>
    Create Account
  </Link>
</p>
</form>
  
   </>
  )

}

export default Login