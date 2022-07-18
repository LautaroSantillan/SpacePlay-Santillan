//IMPORTS
import React, {useState} from "react";
//Estilos
import "./ItemCount.css";
//Sweet Alert
import swal from 'sweetalert';

const ItemCount = ({item, stock, initial, addItem}) => {
    const[qty, setQty] = useState(initial);

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
            });
        }
    };

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
            });
        }
    };

    return (
        <>
            <div className="btns-container">
                <button onClick={sumaQty}> + </button>
                <p>{qty}</p>
                <button onClick={restQty}> - </button>
            </div>
            {
                qty > 0 ?
                <div className="btn-cart">
                    <button onClick={() => addItem(item, qty)}> Agregar al carrito </button>
                </div>
                :
                <div className="btn-cart">
                    <button> Agregar al carrito </button>
                </div>
            }
        </>
    );
};

export default ItemCount;