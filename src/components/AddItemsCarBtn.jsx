import { useState } from 'react';
import { Link } from 'react-router-dom'

export const AddItemsCarBtn = () => {
    const [itemsInCart, setItemsInCart] = useState([]);

    const handleAddToCart = () => {
        setItemsInCart([...itemsInCart, "itemName"])
    }

    return (
        
            <button 
                className="  border border-solid rounded border-gray-500 p-1 hover:bg-red-500 hover:text-gray-100  text-center "
                onClick={handleAddToCart}
            >Agregar
            </button>
        
    );
}

