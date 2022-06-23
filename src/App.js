import './App.css';
import Navigation from "./Components/Navigation/Navigation";
//React-Router-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Nosotros from "./Pages/Nosotros";
import Error from "./Pages/Error";

function App() {
	return (
		<Router>
			<div className="App">
				<div className='header-container'>
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Nosotros" element={<Nosotros />} />
						<Route path="/contacto" element={<Contacto />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
