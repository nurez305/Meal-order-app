import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../Api/axios'
import '../../Pages/SignUp/SignUp.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
    setError('')
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
    setError('')
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
    setError('')
  }
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/register', {
        name,
        email,
        password,
      })
      localStorage.setItem('token', response.data.token)
      navigate('/login')
    
    } catch (error) {
      console.log('ERROR', error)
     
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error,
      })
    }
  }

  return (
    <div className='signup_container'>
      <div className='signup_back'>
        <div className='signup_form'>
          <form onSubmit={handleSubmit}>
            <h3 className='signup_h2'>Create an account</h3>
            <div>
              <label htmlFor='firstName'>Name</label>
              <input
                type='text'
                name='name'
                placeholder='Enter your Name'
                value={name}
                onChange={handleName}
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                value={password}
                required
                onChange={handlePassword}
              />
            </div>
            <button
              type='submit'
              className='signup_btn'
            >
              Sign Up
            </button>

            <p className='signup_text'>
              Already have an account?{' '}
              <Link className='signup_anchor' to='/login'>
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignUp
