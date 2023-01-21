import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/home";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Home/>
    </Router>
  );
}

export default App;
