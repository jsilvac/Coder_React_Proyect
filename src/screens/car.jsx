import { Cards } from '../components/Cards';
import { ItemListContainer } from '../components/ItemListContainer';
import data from '../../data.json'

const Car = ({id}) => {
    return (
        <ItemListContainer>
            {data
                .filter(product => product.id === id)
                .map(product => (
                    <Cards
                    key={product.id}
                    name={product.name}
                    precio={product.precio}
                    imagen={product.url_img}
                    />
                ))
            }
      </ItemListContainer>
    );
}

export default Car;
