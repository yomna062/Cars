import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './Componnent/MasterLayout/MasterLayout'
import Home from './Componnent/Home/Home'
import MainComponnent from './Componnent/MainComponnent/MainComponnent';
import Most_Popular from './Componnent/Most_Popular/Most_Popular';
import All_Cars from './Componnent/All_Cars/All_Cars';
import CarDetails from './Componnent/CarDetails/CarDetails';
import Steps from './Componnent/Steps/Steps';
import RentalDeals from './Componnent/RentalDeals/RentalDeals';
import Testimonials from './Componnent/Testimonials/Testimonials';
import Contact from './Componnent/Contact/Contact';
import Footer from './Componnent/Footer/Footer';

function App() {
  const routes = createBrowserRouter([

    {path : '/'  ,element: <MasterLayout/>,
      children:[
      {index : true , element: <Home/>},

      {path: 'MainComponnent' , element: <MainComponnent/>},
      {path: 'Most_Popular' , element: <Most_Popular/>},
      {path: 'All_Cars' , element: <All_Cars/>},
      {path: 'CarDetails/:id' , element: <CarDetails/>},
      {path:'steps', element:<Steps/>},
      {path:'RentalDeals', element:<RentalDeals/>},
      {path:'Testimonials', element:<Testimonials/>},
      {path: 'Contact' , element: <Contact/>},
      {path:'Footer',element:<Footer/>},

      ]
    }
  ])

  return <RouterProvider router={routes}/>
  
}

export default App
