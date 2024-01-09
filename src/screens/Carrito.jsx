import React, { useContext } from "react";
import { GlobalContext } from './../context/GlobalContext'

const Carrito = () => {
  const { data, carrito, eliminarDelCarrito } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 font-extrabold text-2xl text-center">Carrito de compras</h1>

      {carrito.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <ul className="w-full max-w-md">
          {carrito.map((itemEnCarrito) => {
            const item = data.find((producto) => producto.id === itemEnCarrito.id);

            return (
              <li
                key={itemEnCarrito.id}
                className="bg-white shadow-md p-4 mb-4 flex items-center justify-between rounded"
              >
                {item ? (
                  <>
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-600">Cantidad: {itemEnCarrito.quantity}</p>
                    </div>
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </>
                ) : (
                  "Producto no encontrado"
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
