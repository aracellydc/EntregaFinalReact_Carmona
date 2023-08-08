import  { useEffect, useState } from 'react';
import { getProductById } from '../../productos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProductos(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])
  
  return(
    <div className = 'Contenedor'>
      <ItemDetail {...productos}/>
    </div>
  )
}


export default ItemDetailContainer