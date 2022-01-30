import React from "react";
import Home from "./Home/Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
