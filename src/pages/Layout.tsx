import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <header>
        <div className='flex justify-center gap-[30px] mt-[30px mb-[30px]]'>
          <Link to={"/"}>
            <h1>Home</h1>
          </Link>
          <Link to={"/About"}>
           <h1>About</h1>
          </Link>
          <Link to={"/Servise"}>
            <h1>Service</h1>
          </Link>
        </div>
      </header>
      <main>
         <Outlet/>
      </main>
      <footer></footer>
    </>

  )
}

export default Layout