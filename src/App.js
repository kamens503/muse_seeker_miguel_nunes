import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import CartContextProvider from './context/cart/provider';
import  Nav from './layouts/Nav'
import ItemListContainer from './container/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer'
import CartContainer from './container/CartContainer'


function App() {  
  return (
    <CartContextProvider>
        <BrowserRouter>
        <div className="h-screen bg-gray-900 App">
          <Nav />
            <Routes>
              <Route 
                path='/' 
                element={<ItemListContainer greeting="Bienvenido a la tienda"/>} 
              />
              <Route 
                path='/category/:category' 
                element={<ItemListContainer greeting="Lista de "/>} 
              />
              <Route 
                path='/item/:id' 
                element={<ItemDetailContainer />} 
              />
              <Route 
                path='/cart' 
                element={<CartContainer />} 
              />
            </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
