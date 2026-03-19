import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <header>
        <div className='flex justify-center  gap-[30px] mt-[30px] mb-[30px]'>
            <Link to={"/"}>
                  <h1>Redux Toolkit</h1>
            </Link>
            <Link to={"/AsyncZustand"}>
                <h1>Zustand</h1>
            </Link>
            <Link to={"AsyncJotai"}>
                 <h1>Jotai</h1>
            </Link>
        </div>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout