import React, {useState} from "react";
import "./ItemCount.css";
import swal from 'sweetalert';

const ItemCount = ({stock, initial, onAdd}) => {
    const[qty, setQty] = useState(initial); //qty = quantity

    const sumaQty = () => {
        if(qty < stock) {
            setQty(qty + 1);
        }
        else{
            swal({
                title: "ATENCIÓN!",
                text: "Usted ha alcanzado el limite de items",
                icon: "info",
                button: "Continuar"
            })
        }
    }
    const restQty = () => {
        if(qty > initial) {
            setQty(qty - 1);
        }
        else{
            swal({
                title: "ATENCIÓN!",
                text: "Usted no puede tener menos de 0 items",
                icon: "info",
                button: "Continuar"
            })
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