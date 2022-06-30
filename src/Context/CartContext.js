import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export default function CartProvider({ children }) {
    const [items, setItems] = useState([])  
    
    const isInCart = (id) => {
        const find = items.find(item => item.id === id);
        return find;
    }

    const addItem = (item, qty) => {
        isInCart(item.id) ?
                        setItems(items.map((prod) => {
                            if (prod.id === item.id) {
                                prod.qty += qty;
                            }
                            return prod
                        }))
                        :
                        setItems([...items,  { id: item.id, name: item.title, price: item.price, qty: qty }])
    }   
    
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clear = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )

}
