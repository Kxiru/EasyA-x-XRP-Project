import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import logo from "./Images/hedgit_logo.jpg";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/getstarted" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
