import  { useEffect, useState } from 'react'
import { getProductsByCategory, getProducts } from '../../productos';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' ;



function ItemListContainer(props) {
// const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response =>{
                setProductos(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className='Contenedor'>
            <h1>{props.greeting}</h1>
            <ItemList productos = {productos}/>
        </div>
    )
}

export default ItemListContainer
