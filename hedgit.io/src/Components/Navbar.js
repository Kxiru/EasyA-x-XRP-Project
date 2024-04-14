import logo from "../Images/hedgit_logo.jpg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div class="navbar">
      <Link to="/">
        <img class="logo" src={logo} />
      </Link>
      <div class="text-logo">Hedgit.io</div>

      <div class="navbar-right">
        <Link
          to="/getstarted"
          class="navbar-button"
          style={{ textDecoration: "none" }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
