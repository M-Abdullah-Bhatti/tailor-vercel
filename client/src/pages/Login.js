import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "../assets/css/LoginSignUp.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 full">
      <div className="loginCard">
        

        {Auth.loggedIn() ? (
          <div className="flex-row flex-end logoutButton">
            <button
              type="submit"
              className="logoutBtn"
              onClick={() => Auth.logout()}
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="form">
            <h2 className="loginTitle">Registered customers</h2>
            <div className="flex-row space-between my-2 fields">
              <div className="matlab">
              <label htmlFor="email"></label>
              <input
                className="loginField topfield"
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2 fields">
              <label htmlFor="pwd"></label>
              <input
                className="loginField"
                placeholder="Password"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            {Auth.loggedIn() ? (
              <div className="flex-row flex-end logoutButton">
                <button
                  type="submit"
                  className="logoutBtn"
                  onClick={() => Auth.logout()}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex-row flex-end loginButton">
                <button type="submit" className="loginBtn">
                  Login
                </button>
              </div>
             
            )}
             </div>
            <div className="redirectSection">
        <div className="loginRedirect">Not a member?</div>
        <Link to="/signup" className="goToSignUp">
          <span>←</span> Go To Signup
        </Link>
      </div>
          </form>
        )}
      </div>
      
    </div>
  );
}

export default Login;
