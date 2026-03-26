import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Info from './pages/Info'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Info/:id' element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App