import './App.css';
import  Nav from './components/Nav'
import ItemListContainer from './container/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Nav />
      <ItemListContainer greeting="Hola que hace"/>
    </div>
  );
}

export default App;
