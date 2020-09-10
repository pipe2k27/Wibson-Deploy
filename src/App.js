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

import { HashRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
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
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/cookies">
          <Cookies />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/apple">
          <AppleIos />
        </Route>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
