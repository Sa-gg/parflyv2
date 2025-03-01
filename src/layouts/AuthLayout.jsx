import React from 'react'
import { Outlet  } from 'react-router'
import Login from '../auth/Login'
import Register from '../auth/Register'


const AuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default AuthLayout