import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Dostavka from './pages/Dostavka'
import ProgrammaPitanie from './pages/ProgrammaPitanie'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
       <Route path='/' element={<Layout/>}>
             <Route index element={<Dostavka/>}/>
             <Route path='/ProgrammaRitanie' element={<ProgrammaPitanie/>}/>
       </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App