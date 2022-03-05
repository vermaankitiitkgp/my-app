import React, { useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Education from "./components/education/Education";
import Exp from "./components/exp/Exp";
import Skills from "./components/skills/Skills";
import Summary from "./components/summary/Summary";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/exp" element={<Exp />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;