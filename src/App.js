import { useState } from 'react';
import './App.css';
import  Nav from './components/Nav'
import ItemListContainer from './container/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
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
  );
}

export default App;
