import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { CiBookmark, CiHome, CiSettings } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";

export default function Navbar(props) {
  return (
    <div class="navbar">
      {props.loggedin ? (
        <div class="navbar">
          <Link to="/dashboard">
            <CiHome class="nav-icon" size="24px" />
          </Link>
          <Link
            to="/dashboard"
            class="navbar-button"
            style={{ textDecoration: "none" }}
          >
            <IoIosSearch class="nav-icon" size="24px" />
          </Link>

          <Link
            to="/dashboard"
            class="navbar-button"
            style={{ textDecoration: "none" }}
          >
            <IoBookOutline class="nav-icon" size="24px" />
          </Link>

          <Link
            to="/dashboard"
            class="navbar-button"
            style={{ textDecoration: "none" }}
          >
            <CiBookmark class="nav-icon" size="24px" />
          </Link>

          <Link
            to="/dashboard"
            class="navbar-button"
            style={{ textDecoration: "none" }}
          >
            <CiSettings class="nav-icon" size="24px" />
          </Link>
        </div>
      ) : (
        <div class="navbar">
          <Link to="/">
            <CiHome class="nav-icon" size="24px" />
          </Link>
          <Link
            to="/getstarted"
            class="navbar-button"
            style={{ textDecoration: "none" }}
          >
            <GoSignIn class="nav-icon" size="24px" />
          </Link>
        </div>
      )}
    </div>
  );
}
