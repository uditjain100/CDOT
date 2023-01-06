import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
// import users from "./data.js";

export default function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameMsg, setFirstNameMsg] = useState("");
  const [lastNameMsg, setLastNameMsg] = useState("");
  const [userNameMsg, setUserNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneNumberMsg, setPhoneNumberMsg] = useState("");
  const [roleMsg, setRoleMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState("");

  const handleMsgs = () => {
    setFirstNameMsg("");
    setLastNameMsg("");
    setUserNameMsg("");
    setEmailMsg("");
    setPhoneNumberMsg("");
    setRoleMsg("");
    setPasswordMsg("");
    setConfirmPasswordMsg("");
  };

  console.log(passwordMsg);

  const handleRegister = (e) => {
    e.preventDefault();
    handleMsgs();

    if (firstName.length === 0) setFirstNameMsg("Enter your First Name");
    if (lastName.length === 0) setLastNameMsg("Enter your Last Name");
    if (userName.length === 0) setUserNameMsg("Enter your UserName");
    if (email.length === 0) setEmailMsg("Enter your Email Address");
    if (phoneNumber.length === 0) setPhoneNumberMsg("Enter your Phone Number");
    if (role.length === 0) setRoleMsg("Select your Role");
    if (password.length === 0) setPasswordMsg("Enter your Password");
    if (confirmPassword.length === 0)
      setConfirmPasswordMsg("Enter your Password Again");

    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      userName.length === 0 ||
      email.length === 0 ||
      phoneNumber.length === 0 ||
      role.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    )
      return;

    const usernameRegex = /^[a-z0-9_\.]+$/;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

    // ? The password string will start this way
    // ** (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    // ** (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    // ** (?=.*[0-9])	The string must contain at least 1 numeric character
    // ** (?=.*[!@#$%^&*])	The string must contain at least one special character
    // ** (?=.{8,})	The string must be eight characters or longer

    if (!usernameRegex.test(userName)) {
      setUserNameMsg(
        "Usernames can only have: Lowercase Letters, Numbers, Dots, Underscores"
      );
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailMsg("Enter Valid Email");
      return;
    }
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneNumberMsg("Enter Valid Phone Number");
      return;
    }
    if (!passwordRegex.test(password)) {
      if (password.length < 8)
        setPasswordMsg("Password should have atleast 8 characters");
      else {
        var isSpecialCharacter = false;
        var isUpperCaseLetter = false;
        var isLowerCaseLetter = false;
        var isDigit = false;
        [...password].forEach((ch) => {
          if (
            ch === "!" ||
            ch === "@" ||
            ch === "#" ||
            ch === "$" ||
            ch === "%" ||
            ch === "^" ||
            ch === "&" ||
            ch === "*"
          )
            isSpecialCharacter = true;
          if (ch <= "Z" && ch >= "A") isUpperCaseLetter = true;
          if (ch <= "z" && ch >= "a") isLowerCaseLetter = true;
          if (ch <= "9" && ch >= "0") isDigit = true;
        });

        if (!isSpecialCharacter)
          setPasswordMsg("Password should contain a special character.");
        else if (!isUpperCaseLetter)
          setPasswordMsg("Password should contain a uppercase letter.");
        else if (!isLowerCaseLetter)
          setPasswordMsg("Password should contain a lowercase letter.");
        else if (!isDigit) setPasswordMsg("Password should contain a digit.");
        else setPasswordMsg("Enter Valid Password");
      }
      return;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordMsg("Password didn't match");
      return;
    }

    let isDuplicateUsername = false;
    let users = JSON.parse(localStorage.getItem("users"));
    if (users === null) users = [];
    users.forEach((user) => {
      if (user.userName === userName) {
        setUserNameMsg("Username is not available");
        isDuplicateUsername = true;
        return;
      }
    });
    if (isDuplicateUsername) return;

    var uniqueId = uuid();
    let user = {
      id: uniqueId,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      phoneNumber: phoneNumber,
      role: role,
      password: password,
    };
    localStorage.setItem("users", JSON.stringify([...users, user]));
    localStorage.setItem("token", JSON.stringify(uniqueId));

    let targetScreen = "";
    if (role === "admin") targetScreen = "dashboard";
    else if (role === "guest") targetScreen = "screen2";
    else if (role === "system") targetScreen = "screen3";
    else targetScreen = "screen4";

    navigate("/" + targetScreen + "/" + uniqueId);
    window.location.reload(true);
  };

  return (
    <React.Fragment>
      <form className="card container p-5 rounded-5 mt-3" id="signUpCard">
        <h1 className="text-center">Register</h1>

        <div id="signUpName" className="mb-3">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <div id="firstNameMsg" className="form-text text-danger">
              {firstNameMsg}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <div id="lastNameMsg" className="form-text text-danger">
              {lastNameMsg}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="signUpUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="signUpUsername"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <div id="signUpUsernameMsg" className="form-text text-danger">
            {userNameMsg}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailMsg" className="form-text text-danger">
            {emailMsg}
          </div>
        </div>

        <div id="signUpPhoneAndRole" className="mb-3">
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <div id="phoneNumberMsg" className="form-text text-danger">
              {phoneNumberMsg}
            </div>
          </div>

          <div id="signUpRole" className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>

            <select
              className="form-select"
              id="role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="admin">Admin User</option>
              <option value="guest">Guest User</option>
              <option value="system">System User</option>
              <option value="editor">Editor</option>
            </select>
            <div id="roleMsg" className="form-text text-danger">
              {roleMsg}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="signUpPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="signUpPassword"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div id="signUpPasswordMsg" className="form-text text-danger">
            {passwordMsg}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <div id="confirmPasswordMsg" className="form-text text-danger">
            {confirmPasswordMsg}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success rounded-pill"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </React.Fragment>
  );
}
