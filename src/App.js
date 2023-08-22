import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path ='/' element={<ItemListContainer greeting={'SIDE OF ME'}/>} />
          <Route path ='/categoria/:categoryId' element={<ItemListContainer greeting={'SIDE OF ME'}/>} /> 
          <Route path ='/item/:id' element={<ItemDetailContainer/>} /> 
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout/>} />
          <Route path ='*' element={<h2>404 NOT FOUND</h2>} /> 
        </Routes>
      </CartProvider>
    </BrowserRouter>
    <Footer />
    </div>


  );
}

export default App;
