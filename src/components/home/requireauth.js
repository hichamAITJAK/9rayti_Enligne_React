import React from 'react'
// import { UserClient } from './context/userContext'
import { Navigate, Outlet } from 'react-router-dom'

export default function RequireAuth() {
    
    const MyUser = JSON.parse(localStorage.getItem("user1"))
     return MyUser ?<Outlet/>:<Navigate to="Login"/>;
}

