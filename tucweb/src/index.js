import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./Page/home";
import  Quienessomos from './Page/quienessomos';
import Navbar from "./Componet/Navbar";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar/>
  <Quienessomos/>
  <Home/>
  </>
);
