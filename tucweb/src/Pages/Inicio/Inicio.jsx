import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from "../../Components/Navbar";
import Slider from "../../Components/Slider";

import InicioBody from "../../Pages/Inicio/InicioBody";



const Inicio = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <InicioBody/>
      
    </>
  )

}

export default Inicio;