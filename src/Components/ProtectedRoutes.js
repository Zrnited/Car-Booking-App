import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';



const ProtectedRoutes = () => {

    const Auth = ()=>{
        const user = JSON.parse(window.localStorage.getItem('book'));
        return user
    }

    const userAuth = Auth()

  return (
    userAuth ? <Outlet /> : <Navigate to={'/'}/>
  )
}

export default ProtectedRoutes