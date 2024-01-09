import { ItemListContainer } from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';

const Car = () => {
    const { id } = useParams();
    const idArray = id ? id.split(',') : [];

    return (
        <ItemListContainer
            id={idArray}
        />
    );
}

export default Car;
