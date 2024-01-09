
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'
import Cards from './components/Cards'
import Car from './screens/Car'
import Category from './screens/Carrito'
import data from './../data.json'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './screens/home'
import { GlobalContextProvider } from './context/GlobalContext'



function App() {


  return (

    <>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/car/:id' element={<Car></Car>} />
            <Route path='/category' element={<Category />} />
            <Route path='/' element={<ItemListContainer />} />

          </Routes>
        </NavBar>
        {/* <Routes>
          </Routes> */}
      </BrowserRouter>
    </>

  );
}

export default App
