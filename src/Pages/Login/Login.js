import React from 'react'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from '../../Api/axios'
 import './Login.css'
import Swal from 'sweetalert2'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const response = await axios.post('/login', {
        email,
        password,
      })
      console.log(response)
      localStorage.setItem('token', response.data.token)
      Swal.fire({
        icon: 'success',
        title: 'Welcome...',
        text: response.data.name
      })
      navigate("/store")
      setLoading(false)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:
          error.response.status === 404
            ? error.response.data.Error
            : error.response.data.message,
          })
          setLoading(false)
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setError('')
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setError('')
  }

  return (
    <div className='login_container'>
      {loading ? (<p>Loding...</p>):( <div className='login_back'>
        <div className='login_header'>
          <h2>Naija Meals</h2>
        </div>
          <h3 className='login_h3'>Login</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              autoComplete='off'
              placeholder='Enter your email'
              onChange={handleEmail}
              value={email}
              required
            />
          </div>

          <div>
            <label htmlFor=''>Password</label>
            <input
              type='password'
              autoComplete='off'
              placeholder='Enter your password'
              onChange={handlePassword}
              value={password}
              required
            />
          </div>
          <div className='login_forgot'>
            <Link to='/' className='forgot'>Forgot password?</Link>
          </div>

          <button
            type='submit'
            className='login_btn'
          >
            Login
          </button>
          <p className='login_text'>
            Dont have an account?{' '}
            <Link to='/register' className='login_anchor'>
              Create Account
            </Link>
          </p>
        </form>
      </div>)}
     
    </div>
  )
}

export default Login
