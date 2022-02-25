import { useState } from 'react';
import './App.css';
import  Nav from './components/Nav'
import ItemListContainer from './container/ItemListContainer'

function App() {
  
  return (
    <div className="App">
      <Nav />
      <ItemListContainer greeting="Bienvenido a la tienda"/>
    </div>
  );
}

export default App;
