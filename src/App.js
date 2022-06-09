//import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div className='navigation'>
        <Navigation />
      </div>
      <div className='main'>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
