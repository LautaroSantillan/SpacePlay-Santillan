import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const[qty, setQty] = useState(initial); //qty = quantity

    const sumaQty = () => {
        if(qty < stock) {
            setQty(qty + 1);
        }
    }
    const restQty = () => {
        if(qty > 0) {
            setQty(qty - 1);
        }
    }

    return (
        <>
            {
                qty > 0 ?
                <div className="ui botton attached button" onClick={() => onAdd(qty)}>
                    <i className="cart icon"></i>
                    AÑADIR AL CARRITO
                </div>
                :
                <div className="ui botton attached button disabled">
                    <i className="cart icon"></i>
                    AÑADIR AL CARRITO
                </div>
            }
        </>
    );
};

export default ItemCount;