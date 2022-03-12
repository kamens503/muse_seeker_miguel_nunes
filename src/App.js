import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import CartContextProvider from './context/cart/provider';
import  Nav from './layouts/Nav'
import ItemListContainer from './container/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer'

function App() {  
  return (
    <CartContextProvider value={cart.count}>
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
            </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
