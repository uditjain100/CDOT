import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import users from "../data.js";

export default function Navbar({ id }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users === null) users = [];

    users.forEach((user) => {
      if (id !== null) {
        setUserName(user.userName);
        return;
      }
    });
  }, [userName, id]);

  const handleLogout = () => {
    localStorage.setItem("token", null);
  };

  return (
    <React.Fragment>
      <nav
        id="navBarItemList"
        className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      >
        <div className="container-fluid">
          <Link
            to="/home"
            className="navbar-brand border border-dark rounded-3 p-2"
          >
            C-DOT
          </Link>

          {id === null ? (
            <div className="float-right d-flex flex-row">
              <Link
                className="btn nav-link text-light btn-success m-2 rounded-pill"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn nav-link text-light btn-primary m-2 rounded-pill"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="float-right d-flex flex-row">
              <div className="btn-group">
                <button
                  className="icon-button btn dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="material-icons">notifications</span>
                  <span className="icon-button__badge">5</span>
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Notification 1</li>
                  <li className="dropdown-item">Notification 2</li>
                  <li className="dropdown-item">Notification 3</li>
                  <li className="dropdown-item">Notification 4</li>
                  <li className="dropdown-item">Notification 5</li>
                </ul>
              </div>

              <div className="btn-group">
                <button
                  className="icon-button btn dropdown-toggle-split m-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="material-icons">menu_open</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <div href="#" className="dropdown-item">
                      {userName}
                    </div>
                  </li>
                  <li>
                    <a
                      href="/home"
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}
