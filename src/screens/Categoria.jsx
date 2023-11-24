import useSelectItems from "../hooks/useSelectItems"
import data from '../../data.json';
import { useEffect, useState } from "react";
import { ItemListContainer } from "../components/ItemListContainer";


const Categoria = () => {

    const [ categoriaSeleccionada, SelectItem] = useSelectItems('Selecciona catgoria', data)

    const [categoria, setCategoria] = useState([])

    console.log(categoriaSeleccionada)

    useEffect(() => {

         // Filtrar elementos de data que tienen la categoría seleccionada
        const elementosConCategoria = data.filter(item => item.categoria === categoriaSeleccionada);

        console.log(elementosConCategoria)
    // Obtener los id de esos elementos
        const ids = elementosConCategoria.map(item => item.id);

        console.log(ids)

    // Establecer el estado con los id
        setCategoria(ids);
        
        console.log(categoria)
        return () => {
            setCategoria([])
        };
    }, [categoriaSeleccionada]);

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