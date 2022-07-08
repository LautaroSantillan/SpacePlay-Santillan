//IMPORTS
import React, { createContext, useState } from 'react';
//Sweet Alert
import swal from 'sweetalert';
//Exportar el Context
export const CartContext = createContext([])
//Exportar el Provider
export default function CartProvider({ children }) {
    const [items, setItems] = useState([])  
    //Fijar si existe X producto
    const isInCart = (id) => {
        const find = items.find(item => item.id === id);
        return find;
    }
    //Agregar o Eliminar Producto
    const addItem = (item, qty) => {
        isInCart(item.id) ?
                        setItems(items.map((prod) => {
                            if (prod.id === item.id) {
                                prod.qty += qty;
                            }
                            return prod
                        }))
                        :
                        setItems([...items,  { id: item.id, name: item.title, price: item.price, qty: qty, img: item.pictureUrl }])
    }   
    //Eliminar Producto
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }
    //Vaciar Carrito
    const clear = () => {
        setItems([]);
        swal({
            title: "CARRITO VACIADO!!!",
            text: "Usted acaba de vaciar el carrito de compra",
            icon: "info",
            button: "Continuar"
        })
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clear, isInCart }}>
            { children }
        </CartContext.Provider>
    )

}
