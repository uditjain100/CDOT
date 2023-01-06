import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import users from "../data.js";

export default function Sidebar({ id }) {
  const [currentScreen, setCurrentScreen] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    var users = JSON.parse(localStorage.getItem("users"));
    if (users === null) users = [];

    const currentUser = users.filter((user) => {
      return user.id === id;
    });
    console.log(id);
    console.log(currentUser);
    setRole(String(currentUser[0].role));

    if (role === "admin") setCurrentScreen(1);
    else if (role === "guest") setCurrentScreen(2);
    else if (role === "system") setCurrentScreen(3);
    else setCurrentScreen(4);
  }, [id, role]);

  const handleScreenChange = async (screenNumber) => {
    setCurrentScreen(screenNumber);
  };

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="sideBarList" className="list-group">
        {role === "admin" ? (
          <Link
            to={"/dashboard/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(1)}
            style={
              currentScreen === 1
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">dataset</span>
            <span className="data">Dashboard</span>
          </Link>
        ) : null}
        {role === "guest" ? (
          <Link
            to={"/screen2/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(2)}
            style={
              currentScreen === 2
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">dataset</span>
            <span className="data"> Activities</span>
          </Link>
        ) : null}
        {role === "system" ? (
          <Link
            to={"/screen3/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(3)}
            style={
              currentScreen === 3
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">app_registration</span>
            <span className="data"> Missions</span>
          </Link>
        ) : null}
        {role === "editor" ? (
          <Link
            to={"/screen4/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(4)}
            style={
              currentScreen === 4
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">start</span>
            <span className="data"> History</span>
          </Link>
        ) : null}
        {role === "admin" || role === "guest" ? (
          <Link
            to={"/screen5/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(5)}
            style={
              currentScreen === 5
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">view_timeline</span>
            <span className="data"> Telematics</span>
          </Link>
        ) : null}
        {role === "admin" || role === "editor" ? (
          <Link
            to={"/screen6/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(6)}
            style={
              currentScreen === 6
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">swipe_left</span>
            <span className="data"> About</span>
          </Link>
        ) : null}
        {role === "system" || role === "editor" ? (
          <Link
            to={"/screen7/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(7)}
            style={
              currentScreen === 7
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">data_thresholding</span>
            <span className="data"> Achievements</span>
          </Link>
        ) : null}
        {role === "admin" || role === "system" || role === "editor" ? (
          <Link
            to={"/screen8/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(8)}
            style={
              currentScreen === 8
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">more_up</span>
            <span className="data"> Projects</span>
          </Link>
        ) : null}
        {role === "admin" ||
        role === "system" ||
        role === "editor" ||
        role === "guest" ? (
          <Link
            to={"/screen9/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(9)}
            style={
              currentScreen === 9
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">view_cozy</span>
            <span className="data"> Contact Us</span>
          </Link>
        ) : null}
        {role === "admin" ? (
          <Link
            to={"/screen10/" + id}
            className="list-group-item"
            onClick={() => handleScreenChange(10)}
            style={
              currentScreen === 10
                ? { backgroundColor: "red", color: "white" }
                : { backgroundColor: "rebeccapurple", color: "white" }
            }
          >
            <span className="material-symbols-outlined">
              quick_reference_all
            </span>
            <span className="data"> Others</span>
          </Link>
        ) : null}
      </ul>
    </div>
  );
}
