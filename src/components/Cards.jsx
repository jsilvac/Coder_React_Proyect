/* eslint-disable react/prop-types */

import { AddItemsCarBtn } from "./AddItemsCarBtn"


 const Cards = ( {imagen,name,precio} ) =>{
  return (
    <div className=" w-44 h-auto m-5 border border-solid border-gray-800 rounded p-2 text-center hover:bg-slate-900">
        <img 
        src={ imagen } alt="Nombre del producto"
        className=" w-40 h-28 rounded-md border border-solid border-gray-700 p-2" 
        ></img>
          <div className=" p-1 text-center">
              <h2 className=" p-2">{ name }</h2>
              <p className=" font-bold">${ precio }</p>
          </div>
          <AddItemsCarBtn/>
    </div>
  )
}

export {Cards}