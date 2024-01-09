import React, { useContext } from "react";
import { GlobalContext } from './../context/GlobalContext';
import { Link } from 'react-router-dom';


const ImgCarrito = () => {
    const { carrito } = useContext(GlobalContext);

    const cantidadTotal = carrito.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/carrito" className="relative">
            <img
                src="/resources/images/carrito.png"
                className="w-10 h-10"
                alt="Carrito de compras"
            />
            {cantidadTotal > 0 && (
                <span className="bg-red-500 text-white rounded-full w-6 h-6 absolute top-0 right-0 flex items-center justify-center">
                    {cantidadTotal}
                </span>
            )}
        </Link>
    );
}

export default ImgCarrito;
