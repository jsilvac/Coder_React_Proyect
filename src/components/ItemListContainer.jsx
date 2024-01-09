import { useEffect, useState } from 'react';
import data from '../../data.json';
import Cards from './Cards';
import { useLocation } from 'react-router-dom';



export const ItemListContainer = ( {id} ) => {

    const [dato, setDato] = useState([])
  
    const filtrado = () => {
        const ids = [...id].map(id => parseInt(id));
        const filteredData = data.filter(producto => ids.includes(producto.id));
        setDato(filteredData);
        console.log(filteredData);
    };
    
    useEffect(() => {

        console.log(dato)
        if(id != null && id.length > 0){

            filtrado()

            return;
        }
       
        setDato(data);

        return () => {
            setDato([])
        };
    }, [id]);

    useEffect(() => {

        console.log(id)
        if(id != null && id.length > 0){

            filtrado()

            return;
        }
       
        setDato(data);

        return () => {
            setDato([])
        };
    }, []);

    return (
        <div className=" flex flex-wrap text-center items-center content-center justify-center">
          
            <section className=" flex flex-wrap">
                {dato.map( prod => 
                
                <Cards
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    precio={prod.precio}
                    imagen={prod.url_img}
                />
                )}
            </section> 
        </div>
    );
}


