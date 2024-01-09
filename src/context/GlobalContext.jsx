import { createContext, useContext, useState } from "react";
import data from '../../data.json';

export const GlobalContext = createContext(null)

export const GlobalContextProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregaCarrito = (id, quantity) => {
        if (!id || isNaN(quantity) || quantity <= 0) {
            console.error('ID o cantidad inválidos');
            return;
        }

        const existingItem = carrito.find(cartItem => cartItem.id === id);

        if (existingItem) {
            
            const updatedCarrito = carrito.map(cartItem =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            );
            setCarrito(updatedCarrito);
            console.log('Carrito actualizado:', updatedCarrito);
        } else {
            
            const newItem = {
                id,
                quantity,
            };
            setCarrito([...carrito, newItem]);
            console.log('Nuevo artículo agregado al carrito:', newItem);
        }
    };

    const eliminarDelCarrito = (id) => {
        const filtrado = carrito.filter((i) => i.id !== id);

        setCarrito(filtrado)
    }

    const objectValue = {
        data,
        carrito,
        agregaCarrito,
        eliminarDelCarrito,
    };

    return (<GlobalContext.Provider
        value={{
            ...objectValue
        }}>
        {children}
    </GlobalContext.Provider>);

};