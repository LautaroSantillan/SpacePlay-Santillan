import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
	return (
		<div className="App">
			<div className='header-container'>
				<Navigation />
			</div>
			<div className='MainSection'>
				<ItemListContainer />
				<ItemDetailContainer />
			</div>
		</div>
	);
}

export default App;
