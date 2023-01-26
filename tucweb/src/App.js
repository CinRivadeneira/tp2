import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/home";
import Slider from "../src/Components/register/slider";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}/>
      </Switch>
      <Navbar />
      <Slider/>
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
