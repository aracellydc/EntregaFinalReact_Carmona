import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({nombre, categoria, description,precio, stock,img}) => {

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
                    <ItemCount initial={1} stock={stock} onAdd= {(cantidad) => console.log('Cantidad agregada', cantidad)} />
                </div>
            </section>
        </article>
    )
}

export default ItemDetail