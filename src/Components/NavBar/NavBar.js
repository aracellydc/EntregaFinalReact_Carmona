import logo from '../CartWidget/assets/logo.jpg'
import Button from 'react-bootstrap/Button';

import CartWidget from "../CartWidget/CartWidget"

function NavBar () {
    return(
        <nav className= "flex p-2 justify-between bg-blue-300 ">
            
            <img src={logo} alt="logo tienda" width="100px"></img>
            <h3>SIDE OF ME</h3>
            <div>
                <Button>Nuevo Ingreso</Button>
                <button>Ultimo Stock</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar