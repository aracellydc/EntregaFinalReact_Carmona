import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, stock,img}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section className="Info">
                <p >Precio: S/.{precio}</p>
                <p >Stock: {stock}</p>
                <Link to={`/item/${id}`} className="Button">Ver detalle</Link>
            </section>

        </article>
    )
}

export default Item