import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <header>
        <div className='mt-[30px] mb-[30px] flex justify-center gap-[30px] '>
           <Link to={"/"}>
               <h1>Home</h1>
           </Link>
           <h1>About</h1>
           <h1>Servise</h1>
        </div>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout