import React, {useState} from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const[qty, setQty] = useState(initial); //qty = quantity

    const sumaQty = () => {
        if(qty < stock) {
            setQty(qty + 1);
        }
        else{
            alert("Limite de items alcanzado")
        }
    }
    const restQty = () => {
        if(qty > initial) {
            setQty(qty - 1);
        }
        else{
            alert("Usted no puede tener menos de 0 items")
        }
    }

    return (
        <>
        <div className="button-container">
            <button onClick={sumaQty}> + </button>
            <p>{qty}</p>
            <button onClick={restQty}> - </button>
        </div>
        <div className="cart-container">
            <button onClick={()=>onAdd(qty)}> Agregar al carrito </button>
        </div>
        </>
    );
};

export default ItemCount;