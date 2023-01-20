import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "../src/Pages/Home/home";
import Quienessomos from '../src/Pages/About us/quienessomos';
import Navbar from "./Component/Navbar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <Quienessomos />
    <Home />
  </>
);
