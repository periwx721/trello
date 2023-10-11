import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../layout/pages/home/Home'
import  Form  from '../signUp/Form'

const Index = () => {

  return (
    <Routes>
        <Route path='/login' element={<Form/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default Index
