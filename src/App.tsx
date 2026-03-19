import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import AsyncRedux from './pages/AsyncRedux'
import AsyncJotai from './pages/AsyncJotai'
import AsyncZustand from './pages/AsyncZustand'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
            <Route  index element={<AsyncRedux/>}/>
            <Route path='/AsyncJotai' element={<AsyncJotai/>}/>
            <Route path='/AsyncZustand' element={<AsyncZustand/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App