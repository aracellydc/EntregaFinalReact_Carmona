import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link} from "react-router-dom"


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    
    return(
        <Link to = '/cart' className="CartWidget" >
            <span className="material-icons">shopping_cart</span>
            {totalQuantity()}  
        </Link>
    )
}

export default CartWidget