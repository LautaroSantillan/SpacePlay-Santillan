//IMPORTS
//Estilos
import "./CartWidget.css";
//Icono
import { FaShoppingCart } from 'react-icons/fa';
//Context
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
//React-Router-DOM
import { NavLink } from "react-router-dom";
//DEVELOPING
const CartWidget = () => {
    const { items } = useContext(CartContext);
    
    let itemInCart = 0; //Inicializo el contador

    //Mapea los items que hay y los suma
    items.map((item) => {
        itemInCart = itemInCart + item.qty;
        return itemInCart;
    });

    return (
        <div className="cart">
            <NavLink to="/cart">
                <FaShoppingCart />
                {
                    itemInCart === 0 ?
                                    ""
                                    :
                                    <p className="contadorCart">
                                        {itemInCart}
                                    </p>
                }
            </NavLink>
        </div>
    );
};

export default CartWidget; 