import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link} from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart =() => {
    const {cart, clearCart, totalQuantity} = useContext(CartContext)

    let total = 0;
    cart.forEach((p) => {
        total += p.precio * p.quantity;
        }
    );

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito...</h1>
                <Link to = '/' className= 'Option'>Volver al Inicio</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id}{...p}/>)}
            <h3>Total: S/.{total}</h3>
            <div className="Botons">
                <button onClick={() => clearCart()} className="Button" >Vaciar carrito</button>
                <button ><Link to='/' className="Button">Seguir Comprando</Link></button>
                <button ><Link to = '/checkout' className="Button" >Finalizar Compra</Link></button>
            </div>
        </div>
    )
}

export default Cart