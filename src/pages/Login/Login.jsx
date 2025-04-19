import React from "react";
import "./Login.css";
import { useState } from "react";

import assets from "../../../src/assets/assets";
const Login = () => {
  const [currState, setCurrState] = useState("Sign in");
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign in" ? (
          <input
            type="text"
            placeholder="username"
            className="form-input"
            required
          />
        ) : null}

        <input
          type="email "
          placeholder="email address"
          className="form-input"
        />
        <input type="text" placeholder="password" className="form-input" />
        <button type="submit">
          {currState === "Sign in" ? "Create account" : "Login"}
        </button>
        <br />
        {currState === "Sign in" ? (
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
        ) : null}

        {/*  */}
        <div className="login-forgot">
          {currState === "Sign in" ? (
            <p className="login-toggle">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                }}
              >
                Click here
              </span>
            </p>
          ) : null}

          {currState === "Login" ? (
            <p className="login-toggle">
              Create an account?
              <span
                onClick={() => {
                  setCurrState("Sign in");
                }}
              >
                Click here
              </span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
