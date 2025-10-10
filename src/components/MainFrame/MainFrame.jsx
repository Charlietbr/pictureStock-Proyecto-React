import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Results from '../../pages/Results/Results';
import History from '../../pages/History/History';
import Users from '../../pages/Users/Users';
import './mainFrame.css'

const MainFrame = () => {
  return (
    <div id='mainFrame'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users/:username' element={<Users/>}/>
      </Routes>
    </div>

  )
}

export default MainFrame;