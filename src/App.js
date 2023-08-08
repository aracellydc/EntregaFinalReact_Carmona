import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path ='/' element={<ItemListContainer greeting={'SIDE OF ME'}/>} />
        <Route path ='/categoria/:categoryId' element={<ItemListContainer greeting={'SIDE OF ME'} />} /> 
        <Route path ='/item/:id' element={<ItemDetailContainer/>} /> 
        <Route path ='*' element={<h2>404 NOT FOUND</h2>} /> 
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>


  );
}

export default App;
