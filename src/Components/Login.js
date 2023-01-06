import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
// import users from "./data.js";

export default function Login() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userNameMsg, setUserNameMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [msg, setMsg] = useState("");

  const handleMsgs = () => {
    setUserNameMsg("");
    setPasswordMsg("");
    setMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMsgs();

    if (userName.length === 0) setUserNameMsg("Enter your UserName");
    if (password.length === 0) setPasswordMsg("Enter your Password");
    if (userName.length === 0 || password.length === 0) return;

    let users = JSON.parse(localStorage.getItem("users"));
    if (users === null) users = [];

    let id = "";
    let role = "";
    let doesUserExist = false;
    users.forEach((user) => {
      if (user.userName === userName && password === user.password) {
        doesUserExist = true;
        id = user.id;
        role = user.role;
        return;
      }
    });

    if (!doesUserExist) {
      setMsg("Username or Password is Incorrect");
      return;
    }

    localStorage.setItem("token", JSON.stringify(id));

    let targetScreen = "";
    if (role === "admin") targetScreen = "dashboard";
    else if (role === "guest") targetScreen = "screen2";
    else if (role === "system") targetScreen = "screen3";
    else targetScreen = "screen4";

    navigate("/" + targetScreen + "/" + id);
    window.location.reload(true);
  };

  return (
    <React.Fragment>
      <form className="card container p-5 rounded-5 mt-3" id="loginCard">
        <h1 className="text-center">Credentials</h1>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <div id="usernameMsg" className="form-text text-danger">
            {userNameMsg}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div id="passwordMsg" className="form-text text-danger">
            {passwordMsg}
          </div>
        </div>

        <div id="msg" className="form-text text-danger">
          {msg}
        </div>

        <button
          type="submit"
          className="btn btn-primary rounded-3 mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}
