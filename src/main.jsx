import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Car from './screens/Car.jsx'
import Home from './screens/home.jsx'
import Carrito from './screens/Carrito.jsx'
import Categoria from './screens/Categoria.jsx'
import { GlobalContextProvider } from './context/GlobalContext.jsx'


const router = createBrowserRouter([

  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element:<Home/>
      },
      {
        path:'/car/:id',
        element: <Car/>
      },
      {
        path:'/carrito',
        element:<Carrito/>
      },
      {
        path:'/categoria',
        element:<Categoria/>
      }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </GlobalContextProvider>
  </React.StrictMode>,
)
