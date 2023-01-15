import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../Api/axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import classes from '../Login/Login.module.css'

const SignUp = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')

//   const handleName = (event) => {
//     setName(event.target.value)
//     setError('')
//   }

//   const handleEmail = (event) => {
//     setEmail(event.target.value)
//     setError('')
//   }
//   const handlePassword = (event) => {
//     setPassword(event.target.value)
//     setError('')
//   }
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await axios.post('/register', {
//         name,
//         email,
//         password,
//       })
//       localStorage.setItem('token', response.data.token)
//       navigate('/login')
    
//     } catch (error) {
//       console.log('ERROR', error)
     
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: error.response.data.error,
//       })
//     }
//   }

return (
    <form className={classes["form_container"]}>
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
          required
        />
      </div>

      <div className={classes['form_input']}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          autoComplete='off'
          placeholder='Enter your email'
          required
        />
      </div>

      <div className={classes["form_input"]}>
        <label htmlFor=''>Password</label>
        <input
          type='password'
          autoComplete='off'
          placeholder='Enter your password'
          required
        />
      </div>

      </div>

      <button
        type='submit'
        className={classes['login_btn']}
      >
        Login
      </button>
      <p className={classes['login_text']}>
        Already have an account?{' '}
        <Link to='/login' className={classes['login_anchor']}>
          Please Login
        </Link>
      </p>
    </form>
    )
}
export default SignUp
