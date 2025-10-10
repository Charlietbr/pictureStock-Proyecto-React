import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/header'
import MainFrame from './components/MainFrame/MainFrame'
import Footer from './components/Footer/Footer'

import './App.css'


//===============================================================================

export default function App() {

  return (
    
      <div id='app'>
        <Header/>
        <MainFrame/>
        <Footer/>
      </div>


  )
}


