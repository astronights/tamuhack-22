import React from "react";
// import Home from "./Home/Home";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/home" element={About} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
