import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Header/Navbar";
import Sidebar from "./Components/Header/Sidebar";
import Screen1 from "./Components/Screens/Screen1";
import Screen2 from "./Components/Screens/Screen2";
import Screen3 from "./Components/Screens/Screen3";
import Screen4 from "./Components/Screens/Screen4";
import Screen5 from "./Components/Screens/Screen5";
import Screen6 from "./Components/Screens/Screen6";
import Screen7 from "./Components/Screens/Screen7";
import Screen8 from "./Components/Screens/Screen8";
import Screen9 from "./Components/Screens/Screen9";
import Screen10 from "./Components/Screens/Screen10";

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("token")));
  }, [userId]);

  return (
    <BrowserRouter>
      <div className="content" style={{ minHeight: "90vh" }}>
        <Navbar id={userId}></Navbar>

        {userId === null ? (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        ) : (
          <div id="afterLoginPage" className="row m-2">
            <div id="sideBarContent" className="fixed-top p-0">
              <Sidebar id={userId}></Sidebar>
            </div>
            <div id="mainContent" className="border border-dark p-2">
              <Routes>
                <Route path="/dashboard/:userId" element={<Screen1 />} />
                <Route path="/screen2/:userId" element={<Screen2 />} />
                <Route path="/screen3/:userId" element={<Screen3 />} />
                <Route path="/screen4/:userId" element={<Screen4 />} />
                <Route path="/screen5/:userId" element={<Screen5 />} />
                <Route path="/screen6/:userId" element={<Screen6 />} />
                <Route path="/screen7/:userId" element={<Screen7 />} />
                <Route path="/screen8/:userId" element={<Screen8 />} />
                <Route path="/screen9/:userId" element={<Screen9 />} />
                <Route path="/screen10/:userId" element={<Screen10 />} />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
