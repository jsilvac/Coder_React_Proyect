
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'
import { Cards } from './components/Cards'
import data from './../data.json'
// import { car } from './screens/car'
import {  Routes, Route, BrowserRouter} from "react-router-dom"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path='/' element={<home/>}/>
            <Route path='/car' element={<car/>}/>
          </Routes>
        </NavBar>
      </BrowserRouter>
      <ItemListContainer>
        {data.map( product => 
          <Cards 
            key = {product.key}
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
