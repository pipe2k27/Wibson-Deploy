import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import FirstCard from "./components/FirstCard/FirstCard";
import SecondCard from "./components/SecondCard/SecondCard";
import Principles from "./components/Principles/Principles";
import ThirdCard from "./components/ThirdCard/ThirdCard";
import Hacked from "./components/Hacked/Hacked";
import PimCity from "./components/PimCity/PimCity";
import FourthCard from "./components/FourthCard/FourthCard";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <FirstCard />
          <SecondCard />
          <Principles />
          <div className="gradient-background">
            <ThirdCard />
            <Hacked />
          </div>
          <PimCity />
          <FourthCard />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
