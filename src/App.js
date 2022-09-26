import { ItemListConstainer } from './Components/Greeting/ItemListConstainer.js';
import { Navbar } from './Components/Navbar/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListConstainer greeting='Hola'/>
    </div>
  );
}

export default App;
