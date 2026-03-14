
import { Link, Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <header>
                <div className='h-[90px] flex justify-center gap-[30px] pt-[30px] pb-[30px] bg-stone-800 text-[white] '>
                    <Link to={"/"}>
                        <h1>Zustand</h1>
                    </Link>
                    <Link to={"/Reduxtoolkit"}>
                     <h1>Redux Toolkit</h1>
                    </Link>
                    <Link to={"/Jotai"}>
                         <h1>Jotai</h1>
                    </Link>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout