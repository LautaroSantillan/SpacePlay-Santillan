//IMPORTS
import { useContext, useEffect, useState } from "react";
//Estilos
import "./Cart.css";
//Context
import { CartContext } from "../Context/CartContext";
//React-Router-DOM
import { NavLink } from "react-router-dom";

const Cart = () => {
    const [priceTot, setPriceTot] = useState(0);   
    const [cart, setCart] = useState([]);

    const {items, removeItem, clear} = useContext(CartContext)

    const handlePrice = () => {
        let total = 0;
        items.map((item) => (total += item.qty * item.price));
        setPriceTot(total);
    };
    
    useEffect(() => {
        handlePrice();
    });

    const handleChange = (item, d) => {
        const ind = items.indexOf(item);
        const arry = items;
        arry[ind].qty += d;
    
        if (arry[ind].qty === 0 && arry[ind].qty < 10) 
            arry[ind].qty = 1;
            setCart([...arry]);
    };
    
    const styles = {
        div:{
            paddingTop: 130
        }
    }

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
                <span>${priceTot}</span>
            </div>
            <div className="action">
                <span>Ultimas Acciones:</span>
                <div>
                    <button className="btn-red btnCart" onClick={() => clear()}>Vaciar el Carrito</button>
                    <NavLink to="/finishcart">
                        <button className="btn-green btnCart">Terminar la Compra</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Cart