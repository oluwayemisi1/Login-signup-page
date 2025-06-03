import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="user" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="email" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {/* Show Lost Password only on Login */}
      {action === "Login" && (
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit active" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>

        <div
          className={action === "Login" ? "submit active" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
