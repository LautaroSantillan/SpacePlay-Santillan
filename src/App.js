//IMPORTS
//Estilos
import './App.css';
//Componentes
import Navigation from "./Components/Navigation/Navigation";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';
//React-Router-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Context
import CartProvider from './Context/CartContext';
// Pages
import Home from "./Pages/Home/Home";
import Nosotros from "./Pages/Nosotros/Nosotros";
import CategoryType from "./Pages/CategoryType/CategoryType";
import Cart from "./Pages/Cart/Cart";
import Shop from "./Pages/Shop/Shop";
import Error from "./Pages/Error/Error"; 

const App = () => {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<div className='header-container'>
						<Navigation />
					</div>
					<div className='main-container'>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/nosotros" element={<Nosotros />} />
							<Route path="/category/:category" element={<CategoryType/>} />
							<Route path="/item/:id" element={<ItemDetailContainer />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/shop" element={<Shop />} />
							<Route path="*" element={<Error />} />
						</Routes>
					</div>
					<div className='footer-container'>
						<Footer />
					</div>
				</div>
			</Router>
		</CartProvider>
	);
};

export default App;
