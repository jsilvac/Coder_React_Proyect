import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AddItemsCarBtn } from "./AddItemsCarBtn"

const Cards = ( {id,imagen,name,precio} ) =>{

 const [showButton, setShowButton] = useState(false)

 //console.log(showButton)

  return (
    <div className=" w-44 h-auto m-5 border border-solid border-gray-800 rounded p-2 text-center hover:bg-slate-900">
          <Link to={`/car/${id}`} >
            <img key={id}
            src={ imagen } alt={name}
            className=" w-40 h-28 rounded-md border border-solid border-gray-700 p-2" 
            onClick={() => setShowButton(true)}
            ></img>
          </Link>
        
          <div className=" p-1 text-center">
              <h2 className=" p-2">{ name }</h2>
              <p className=" font-bold">${ precio }</p>
          </div>
          
           <AddItemsCarBtn
            id={id}
           /> 
          
    </div>
  )
}

export default Cards