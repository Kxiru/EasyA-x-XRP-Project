import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import StockTrader from "./Components/StockTrader";

function App() {
  const [loggedin, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar loggedin={loggedin} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/getstarted"
              element={<Login setLoggedIn={setLoggedIn} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stocktrader" element={<StockTrader />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
