import React from 'react'
import MainComponnent from '../MainComponnent/MainComponnent'
import Most_Popular from '../Most_Popular/Most_Popular'
import Steps from './../Steps/Steps';
import CarsSlider from './../CarsSlider/CarsSlider'
import RentalDeals from './../RentalDeals/RentalDeals';
import Testimonials from './../Testimonials/Testimonials';
import Contact from '../Contact/Contact';

export default function Home() {
  return (
    <>
      <div className="space-y-16"> 
        <MainComponnent />
        <Most_Popular />
        <Steps />
        <CarsSlider />
        <RentalDeals />
        <Testimonials/>
        <Contact/>
      </div>
    </>
  )
}
