import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer.js';
import { Navbar } from './Components/Navbar/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Hola'/>
    </div>
  );
}

export default App;
