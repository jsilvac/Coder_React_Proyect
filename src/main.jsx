import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Car from './screens/car.jsx'
import Home from './screens/home.jsx'
import Carrito from './screens/Carrito.jsx'


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
        path:'/Carrito',
        element:<Carrito/>
      }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
