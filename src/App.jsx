
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'
import { Cards } from './components/Cards'
import Car from './screens/car'
import Category from './screens/category'
import data from './../data.json'

import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"



function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path='/' element={<home/>}/>
            <Route path='/car/id:' element={<Car/>}/>
            <Route path='/category' element={<Category/>}/>
          </Routes>
        </NavBar>
      </BrowserRouter>
      <ItemListContainer>
        {data.map( product => 
          <Cards 
            key = {product.id}
            name={product.name} 
            precio={product.precio}
            imagen={product.url_img}
            ></Cards>
        )}

      </ItemListContainer>
    </>
  );
}

export default App
