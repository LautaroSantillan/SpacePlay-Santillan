//import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
	return (
		<div className="App">
		<div className='header-container'>
			<Navigation />
		</div>
		<div className='UserSection'>
						<ItemListContainer
							name='PLAYSTATION 5'
							price='$200.000'
							description='La PS5 es una nueva videoconsola más potente y de mejor tecnologia'
							img='https://arsonyb2c.vtexassets.com/arquivos/ids/359142/PlayStation-5-DualShock.jpg?v=637818378103030000'
						/>
						<ItemListContainer
							name='PLAYSTATION 4'
							price='$100.000'
							description='La PS4 es la cuarta videoconsola del modelo PlayStation.'
							img='https://mauricomputacion.com.ar/images/productos/17374.webp'
						/>
						<ItemListContainer
							name='JOYSTICK PS5 DUALSENCE'
							price='$20.000'
							description='El controlador DualSense PS5 es un gamepad innovador y cómodo'
							img='https://www.cetrogar.com.ar/media/catalog/product/e/l/el2308-3.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds'
						/>
					</div>
		</div>
	);
}

export default App;
