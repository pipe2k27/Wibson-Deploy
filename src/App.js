import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import FirstCard from "./components/FirstCard/FirstCard";
import SecondCard from "./components/SecondCard/SecondCard";
import Principles from "./components/Principles/Principles";
import ThirdCard from "./components/ThirdCard/ThirdCard";
import Hacked from "./components/Hacked/Hacked";
import PimCity from "./components/PimCity/PimCity";
import FourthCard from "./components/FourthCard/FourthCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstCard />
      <SecondCard />
      <Principles />
      <div className="gradient-background">
        <ThirdCard />
        <Hacked />
      </div>
      <PimCity />
      <FourthCard />
    </div>
  );
}

export default App;
