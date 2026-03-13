
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Info from './pages/Info'
import About from './pages/About'
import Servise from './pages/Servise'
import Layout from './pages/Layout'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Info/:id' element={<Info />} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Servise' element={<Servise/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App