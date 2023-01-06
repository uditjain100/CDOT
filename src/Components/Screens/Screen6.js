import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import users from "../data.js";

export default function Screen6() {
  const { userId } = useParams();
  const [isValidUser, setIsValidUser] = useState(false);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users === null) users = [];

    let role = "";
    users.forEach((user) => {
      if (user.id === userId) {
        role = user.role;
        return;
      }
    });

    if (
      userId !== null &&
      JSON.parse(localStorage.getItem("token")) === userId &&
      (role === "admin" || role === "editor")
    )
      setIsValidUser(true);
  }, [isValidUser, userId]);
  return (
    <React.Fragment>{isValidUser ? <div>Screen6</div> : null}</React.Fragment>
  );
}
