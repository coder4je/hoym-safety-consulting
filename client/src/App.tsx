import React, { useState } from "react";
import "./App.css";
import Home from "./home/index";
import StaffingService from "./components/StaffingService";
import NoMatch from "./components/NoMatch";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SiteSafetyPlan from "./components/SiteSafetyPlan/SiteSafetyPlan";
import Training from "./components/Training";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="staffing" element={<StaffingService />} />
        <Route path="ssp" element={<SiteSafetyPlan />} />
        <Route path="training" element={<Training />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
