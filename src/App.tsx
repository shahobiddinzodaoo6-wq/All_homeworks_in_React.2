import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Zustand from './pages/Zustand'
import ReduxToolkit from './pages/ReduxToolkit'
import Jotai from './pages/Jotai'

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout/>}>
             <Route index element={<Zustand/>}/>
             <Route path='/Reduxtoolkit' element={<ReduxToolkit/>}/>
             <Route path='/Jotai' element={<Jotai/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App