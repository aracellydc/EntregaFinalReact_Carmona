import {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

// function ItemCount(initial, stock, onAdd) {

    const [cantidad,setCantidad] = useState(initial)


    const Sumar = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const Restar = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={Restar}> - </button>
                <h4 className='Number'> {cantidad}</h4>
                <button className='Button' onClick={Sumar}> + </button>
            </div>
            <div>
                <button className='Button' onClick={()=> onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount