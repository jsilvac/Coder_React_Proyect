import { ItemListContainer } from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';
import data from '../../data.json'

const Car = () => {

    const { id } = useParams();

    return (
        
        <ItemListContainer
            id={id}
        />
    );
}

export default Car;
