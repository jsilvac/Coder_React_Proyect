import useSelectItems from "../hooks/useSelectItems"
import { useContext, useEffect, useState } from "react";
import { ItemListContainer } from "../components/ItemListContainer";
import { GlobalContext } from "../context/GlobalContext";


const Categoria = () => {

    const { data } = useContext(GlobalContext)

    const [ categoriaSeleccionada, SelectItem] = useSelectItems('Selecciona categoria', data)

    const [categoria, setCategoria] = useState([])

    console.log(categoriaSeleccionada)

    useEffect(() => {

         
        const elementosConCategoria = data.filter(item => item.categoria === categoriaSeleccionada);

        console.log("Elementos con categoría:", elementosConCategoria);

        const ids = elementosConCategoria.map(item => item.id);

        console.log("IDs:", ids);

  
        setCategoria(ids);
        
        console.log('categoria: ', categoria)
        
    }, [categoriaSeleccionada]);

    useEffect(() => {
       console.log(data)
    }, []);

    return (

        <div className=" flex flex-col">
            <h1 className=" mb-4 font-extrabold text-xl">Categorías</h1>

            <SelectItem/>

            <ItemListContainer
                id={categoria}
            />

        </div>


    )
}

export default Categoria