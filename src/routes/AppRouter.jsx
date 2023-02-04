import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home.jsx";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Work from "../components/Work";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="skills" element={<Skills />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
