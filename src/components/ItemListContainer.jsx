import { useContext, useEffect, useState } from 'react';
import Cards from './Cards';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../src/config/firebaseConfig';
import { GlobalContext } from '../context/GlobalContext';
import fff from './../../resources/images/l200.png'




export const ItemListContainer = ( {id} ) => {

    const { data, setData } = useContext(GlobalContext)

    const [dato, setDato] = useState([])
  
    const filtrado = () => {
        console.log('id : ', id);
        
        if (id && id.length > 0) {
            const ids = id.map(id => id.toString());
            console.log('ids : ', ids);
    
            const filteredData = data.filter(producto => ids.includes(producto.id.toString()));
            console.log('filter : ', filteredData);
    
            setDato(filteredData);
        } else {
            setDato([]); // o setDato(data); según tu requerimiento
        }
    };
    
    
    useEffect(() => {

        //console.log(dato)
        if(id != null && id.length > 0){

            filtrado()

            return;
        }
       
        setDato(data);

        return () => {
            setDato([])
        };
    }, [data,id]);

    useEffect(() => {
        const myData = query(collection(db, "vehiculos"));
        getDocs(myData)
            .then((resp) => {
                const prodArray = resp.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(prodArray);
            })
            .catch(error => console.error(error));

            
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
                    imagen={prod.img}
                />
                )}
            </section> 
        </div>
    );
}


