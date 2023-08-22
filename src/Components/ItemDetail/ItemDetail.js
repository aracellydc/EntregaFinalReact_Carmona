import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, nombre, categoria, description,precio, stock,img}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,nombre,precio
        }
        addItem(item,quantity)
    }

    return (
        <article className="CardItemDetail">
            <header className="Header">
                <h2 className="ItemHeader">{nombre}</h2>
            </header>

            <section className='Detalle' >
                <picture>
                    <img src={img} alt={nombre} className="ItemImgDetail"/>
                </picture>
                <div className='InfoDetail'>
                    <p className="Info">Categoria: {categoria}</p>
                    <p className="Info">Descripción: {description}</p>
                    <p className="Info">Precio: S/.{precio}</p>
                    {
                        quantityAdded > 0 ? (
                            <Link to = '/cart' className='Option'>Terminar Compra</Link>
                        ) : ( 
                            <ItemCount initial={1} stock={stock} onAdd= {handleOnAdd} />
                        )
                        
                    }
                </div>
            </section>
        </article>
    )
}

export default ItemDetail