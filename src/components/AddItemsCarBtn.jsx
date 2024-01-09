import React,{ useState,useContext } from 'react';
import { GlobalContext } from './../context/GlobalContext'

export const AddItemsCarBtn = ( { id }) => {
    const [itemsInCart, setItemsInCart] = useState([]);

    //const  agregaCarrito  = useContext(GlobalContext);
    const { agregaCarrito } = useContext(GlobalContext);

    return (
        
            <button 
                className="  border border-solid rounded border-gray-500 p-1 hover:bg-red-500 hover:text-gray-100  text-center "
                onClick={() => agregaCarrito(id, 1)}
            >Agregar
            </button>  
    );
}

