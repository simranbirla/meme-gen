import React, { useState } from "react";
import { provider, auth } from "../firebase";
import loginImg from "../images/login.svg";

const Login = ({ setSign, setUser, user }) => {
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        setSign(true);
        setUser(res.user);
      })
      .catch((err) => alert(err));
  };

  /*  const logout = () => {
    auth
      .signOut()
      .then((res) => {
        setUser();
        setSign(false);
      })
      .catch((err) => alert(err));
  };*/

  return (
    <div>
      {console.log(user)}
      <h3>Login here through google</h3>
      <img src={loginImg} alt="login" width="400px" height="400px" />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
