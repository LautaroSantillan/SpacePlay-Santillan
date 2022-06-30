//IMPORTS
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
    const {items, removeItem, clear} = useContext(CartContext)

    return (
        <div>
            {
                items.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <h4>{item.qty}</h4>
                        <button style={{color:"blue", cursor: "pointer"}} onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                    </div>
                )})
            }
            <button style={{color:"red", cursor: "pointer"}} onClick={() => clear()}>Vaciar el Carrito</button>
        </div>
    )
}

export default Cart