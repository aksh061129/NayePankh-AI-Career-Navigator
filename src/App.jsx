import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Recommendations from "./pages/Recommendations";
import CareerMentor from "./pages/CareerMentor";
import Roadmap from "./pages/Roadmap";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/mentor" element={<CareerMentor />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;