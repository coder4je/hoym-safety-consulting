import "./App.css";
import Home from "./home/index";
import StaffingService from "./components/StaffingService";
import NoMatch from "./components/NoMatch";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="staffing" element={<StaffingService />} />
        <Route />
        <Route />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
