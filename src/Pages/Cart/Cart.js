//IMPORTS
import { useContext } from "react";
//Estilos
import "./Cart.css";
//Context
import { CartContext } from "../../Context/CartContext";
//React-Router-DOM
import { Link } from "react-router-dom";
//DEVELOPING
const Cart = () => {
    const { items, removeItem, clear, addItem } = useContext(CartContext);

    //Sacar el precio total
    const handlePrice = () => { 
        let total = 0;
        items.map((item) => (total += item.qty * item.price));
        return total;
    };

    //Sumar y Restar productos
    const handleChange = (item, d) => { 
        if(item.qty >= 0 && item.qty < 10)
        {
            addItem({id: item.id}, d);
        }        
    };

    //Estilo en linea
    const styles = {
        div:{
            paddingTop: 130
        }
    };

    //Verificar si el carrito esta vacio
    if(items.length === 0){
        return(
            <div className="cartnull" style={styles.div}>
                <h2>Su carrito esta vacio</h2>
                <img src="https://thumbs.dreamstime.com/b/hombre-d-con-la-carretilla-del-carro-de-la-compra-57785129.jpg" alt="carritoVacio" />
                <br></br>
                <Link to="/">
                    Volver al HOME
                </Link>
            </div>
        )
    };
    
    //Si el carrito contiene productos
    return (
        <div className="cartcontainer" style={styles.div}>
            <h2 className="cart-titulo">CARRITO</h2>
            <hr></hr>
            {
                items.map((item) => {
                    return(
                    <div className="cart-box" key={item.id}>
                        <div className="cart-item">
                            <img src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <button onClick={() => handleChange(item, 1)}>+</button>
                            <button>{item.qty}</button>
                            <button onClick={() => handleChange(item, -1)}>-</button>
                        </div>
                        <div>
                            <span>${item.price * item.qty}</span>
                            <button onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                        </div>
                    </div>
                )})
            }
            <div className="total">
                <span>Precio Total de su CARRITO:</span>
                <span>${handlePrice()}</span>
            </div>
            <div className="action">
                <span>Ultimas Acciones:</span>
                <div>
                    <button className="btn-red btnCart" onClick={() => clear()}>Vaciar el Carrito</button>
                    <Link to="/shop">
                        <button className="btn-green btnCart">Terminar la Compra</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;