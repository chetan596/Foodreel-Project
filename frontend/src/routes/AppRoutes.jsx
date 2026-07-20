import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/Login/UserRegister'
import UserLogin from '../pages/Login/UserLogin'
import FoodPartnerRegister from '../pages/Login/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/Login/FoodPartnerLogin'
import Home from "../pages/Home/Home"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/user/register' element={<UserRegister />} />
      <Route path='/user/login' element={<UserLogin />} />
      <Route path='/foodPartner/register' element={<FoodPartnerRegister />} />
      <Route path='/foodPartner/login' element={<FoodPartnerLogin />} />



      <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}

export default AppRoutes
