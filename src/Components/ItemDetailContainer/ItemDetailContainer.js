import  { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc , doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

//import { getProductById } from '../../asyncMock';


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams()
  
  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'productos', id)

    getDoc(docRef)
      .then((response) => {
        const data = response.data()
        const productAdapted = {id: response.id, ...data }
        setProductos(productAdapted)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])
  
  return(
    <div className = 'Contenedor'>
      <ItemDetail {...productos}/>
    </div>
  )
}


export default ItemDetailContainer