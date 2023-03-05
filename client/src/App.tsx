import "./App.css";
import Home from "./home/index";
import StaffingService from "./components/StaffingService";
import NoMatch from "./components/NoMatch";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SiteSafetyPlan from "./components/SiteSafetyPlan/SiteSafetyPlan";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="staffing" element={<StaffingService />} />
        <Route path="ssp" element={<SiteSafetyPlan />} />
        <Route />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
