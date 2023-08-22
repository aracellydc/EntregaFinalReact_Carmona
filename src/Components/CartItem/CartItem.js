import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartItem = ({id, nombre, precio, quantity}) => {

    const { removeItem } = useContext(CartContext)
    return (
        <>
            <section className='DetalleFinal'>
                <p className='header'>{nombre}</p>               
                <p className='info'>Cantidad: {quantity}</p>
                <p className='info'>Precio x und: S/.{precio}</p>
                <p className='info'>Subtotal: S/.{precio * quantity}</p>

                <button variant="secondary" onClick={() => removeItem(id)}>
                    <Link to={`/cart`} className='Button'>Quitar</Link>
                </button>
            </section>

        </>
    )
}

export default CartItem