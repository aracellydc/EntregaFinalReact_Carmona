import  { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { collection, getDocs , query, where} from 'firebase/firestore';



const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('categoria', '==', categoryId))
            : collection(db, 'productos')
        
        getDocs (collectionRef)
            .then( response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <div className='Contenedor'>
            <h2> {props.greeting} </h2>
            <ItemList productos = {productos}/>
        </div>
    )
    
}

export default ItemListContainer
