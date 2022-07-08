//IMPORTS
// import { useEffect, useState } from 'react';
//Estilos
import './App.css';
//Componentes
import Navigation from "./Components/Navigation/Navigation";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';
// import ItemCount from './Components/ItemCount/ItemCount';
//React-Router-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Context
import CartProvider from './Context/CartContext';
// Pages
import Home from "./Pages/Home/Home";
import Contacto from "./Pages/Contacto/Contacto";
import Nosotros from "./Pages/Nosotros/Nosotros";
import Cart from "./Pages/Cart/Cart";
import Error from "./Pages/Error/Error"; 
//Firebase
// import { db } from "./Firebase/firebaseConfig";
// import { collection, query, getDocs, getDoc } from "firebase/firestore";
//DEVELOPING
const App = () => {
	// const [albumData, setAlbumData] = useState([]);

	// const getAlbums = async () => {
	// 	const q = query(collection(db, "playstation"));
	// 	const querySnapshot = await getDocs(q);
	// 	const docs = [];
	// 	querySnapshot.forEach((doc) => {
	// 		docs.push({...doc.data(), id: doc.id})
	// 	});
	// 	console.log(docs);
	// }

	// useEffect(() => {
	// 	getAlbums();
	// }, []);

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
							<Route path="/contacto" element={<Contacto />} />
							<Route path="/category/:categoryId" element={<ItemListContainer/>} />
							<Route path="/item/:id" element={<ItemDetailContainer />} />
							<Route path="/cart" element={<Cart />} />
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
}

export default App;
