import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Compare from "./pages/Compare/Compare";
import Rank from "./pages/Rank/Rank";
import React from "react";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/rank" element={<Rank/>} />
      </Routes>
    </>
  );
}

export default App;
