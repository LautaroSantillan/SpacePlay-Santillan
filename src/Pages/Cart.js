//IMPORTS
//Context
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
    const {items, removeItem, clear} = useContext(CartContext)

    const styles = {
        div:{
            paddingTop: 130
        }
    }

    return (
        <div style={styles.div}>
            {
                items.map((item) => {
                return (
                    <div key={item.id}>
                        <div>
                            <img src={item.img} alt={item.name}/>
                            <h2>{item.name}</h2>
                            <h4>{item.price}</h4>
                            <h4>{item.qty}</h4>
                            <button style={{color:"blue", cursor: "pointer"}} onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                        </div>
                        <div>
                            <button style={{color:"red", cursor: "pointer"}} onClick={() => clear()}>Vaciar el Carrito</button>
                        </div>
                    </div>
                )})
            }
        </div>
    )
}

export default Cart