import {toast} from 'react-toastify'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../Api/axios'
import { useNavigate } from 'react-router-dom'
import classes from '../Login/Login.module.css'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(name.trim().length === 0 || !email || password.trim().length === 0){
      return toast('All field must be properly filled')
    }
    setLoading(true)
    try {
      const response = await axios.post('/register', {
        name,
        email,
        password,
      })
      localStorage.setItem('token', response.data.token)
      toast('User successfully created, Please login')
      navigate('/login')
      setLoading(false)
    
    } catch (error) {
      toast(<div>{error.response.data.message}</div>)
      setLoading(false)
    }
  }

return (
  
  <>
  {loading && (
    <div className={classes.loadingmodal}>
    {/* <div className={classes["lds-spinner"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> */}

        <div className={classes.loader}>
          <div className={classes.spinner}></div>
          </div>

    </div>
      )}

    <form onSubmit={handleSubmit} className={classes["form_container"]}>
      <div className={classes["form_head"]}>  
      <h2>Naija Meals</h2>
      </div>
      <div className={classes.container}>

      <div className={classes['form_input']}>
        <label htmlFor='email'>Name</label>
        <input
          type='text'
          autoComplete='off'
          placeholder='Enter your name'
          onChange={handleName}
          value={name}
        />
      </div>

      <div className={classes['form_input']}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          autoComplete='off'
          placeholder='Enter your email'
          onChange={handleEmail}
          value={email}
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
        />
      </div>

      </div>

      <button
        type='submit'
        className={classes['login_btn']}
      >
        Sign Up
      </button>
      <p className={classes['login_text']}>
        Already have an account?{' '}
        <Link to='/login' className={classes['login_anchor']}>
          Please Login
        </Link>
      </p>
    </form>

    </>
    )
}
export default SignUp
