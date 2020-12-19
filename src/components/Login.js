import React, { useState } from "react";
import { provider, auth } from "../firebase";
const Login = ({ setSign, sign }) => {
  const [user, setUser] = useState();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        setSign(true);
        setUser(res.user);
      })
      .catch((err) => alert(err));
  };

  const logout = () => {
    auth
      .signOut()
      .then((res) => {
        setUser();
        setSign(false);
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      {console.log(user)}
      Login here through google
      {!sign ? (
        <button onClick={login}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Login;
