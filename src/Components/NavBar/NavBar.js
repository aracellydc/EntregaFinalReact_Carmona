import logo from '../CartWidget/assets/logo.jpg'
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <img src={logo} alt="logo tienda" width="100px"></img>
            <h3>SIDE OF ME</h3>
            {/* <img src={logo} alt="logo tienda" width="100px"></img> */}
            <div>
                <button>Nuevo Ingreso</button>
                <button>Ultimo Stock</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar