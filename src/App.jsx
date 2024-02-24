import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import LandingPage from "./pages/landing";
import RealDashboard from "./pages/Realdash";
import RiderDetails from "./pages/riderDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<RealDashboard />}></Route>
        <Route path="/riderDetails" element={<RiderDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
//testing Comment for git hub