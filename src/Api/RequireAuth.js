import React from 'react'
import { Navigate } from 'react-router-dom'

function RequireAuth({ children }) {
  const authToken = localStorage.getItem('token')

  if(!authToken) {
    return <Navigate to='/' replace />
  }
  return children
}

export default RequireAuth