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
import Privacy from "./components/Policies/Privacy";
import Cookies from "./components/Policies/Cookies";
import Terms from "./components/Policies/Terms";
import AppleIos from "./components/AppleIos/AppleIos";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Wibson-Deploy">
        <Navbar />
        <Route exact path="/Wibson-Deploy">
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
        <Route path="/Wibson-Deploy/about-us">
          <AboutUs />
        </Route>
        <Route path="/Wibson-Deploy/privacy">
          <Privacy />
        </Route>
        <Route path="/Wibson-Deploy/cookies">
          <Cookies />
        </Route>
        <Route path="/Wibson-Deploy/terms">
          <Terms />
        </Route>
        <Route path="/Wibson-Deploy/apple">
          <AppleIos />
        </Route>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
