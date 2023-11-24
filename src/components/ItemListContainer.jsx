import { useEffect, useState } from 'react';
import data from '../../data.json';
import Cards from './Cards';
import { useLocation } from 'react-router-dom';



export const ItemListContainer = ( {id} ) => {

    const [dato, setDato] = useState([])

    const [decar, setDecar ] = useState('')

    const location= useLocation()
    

    useEffect(() => {

        
        if(id != null && id.length > 0){

            const filteredData = data.filter(producto => producto.id === Number(id));
            setDato(filteredData);

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


