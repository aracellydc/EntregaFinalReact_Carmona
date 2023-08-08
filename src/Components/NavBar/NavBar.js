import logo from '../CartWidget/assets/logo.jpg'
import { Link, NavLink } from "react-router-dom"

import CartWidget from "../CartWidget/CartWidget"

function NavBar () {
    return(
        <nav className= "panel_nav">
        <Link to = '/'>
            <img src={logo} alt="logo tienda" width="100px"></img>
        </Link>
        <div className='Categories'>
            <NavLink to="/">Productos</NavLink>
            <NavLink to={`/categoria/polos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Polos</NavLink>
            <NavLink to={`/categoria/blusas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Blusas</NavLink>
            <NavLink to={`/categoria/joggers`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Joggers</NavLink>

            <CartWidget />
        </div>

        </nav>
    )
}

export default NavBar