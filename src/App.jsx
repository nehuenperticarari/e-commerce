import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductProvider.jsx';
import Categories from './pages/Categories.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Shop from './pages/Shop.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Order from './components/Order.jsx';
import Searcher from './components/Searcher.jsx';


function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
      <Header/>
        <Routes>

            <Route path="/" index element={<Home/>}/> 
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/login' element={<Categories/>}/>
            <Route path='/search' element={<Searcher/>}/>
            <Route path='/categories/:category' element={<ItemListContainer/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:name' element={<ItemDetailContainer/>}/>

            //TODO ruta protegida
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<Order/>}/>


        </Routes>
      </BrowserRouter>
      <Footer/>
    </ProductProvider>
  )
}

export default App
