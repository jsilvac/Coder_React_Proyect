import { Outlet, useLocation } from 'react-router-dom'
import { NavBar } from './NavBar'

const Layout = () => {

    const location= useLocation()

  return (
    <>
        <NavBar/>
        <h1 className=" text-3xl font-bold p-4 text-center"> Nuestros vehículos</h1>
        
        <Outlet/>
    </>
  )
}

export default Layout