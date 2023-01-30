import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import About from "../components/About";
import Home from "../components/Home.jsx";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
