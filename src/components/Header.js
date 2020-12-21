import React from "react";
import "../Style/Header.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Header = ({ setUser, setSign, sign }) => {
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
    <div className="header">
      <div className="header__left"></div>
      <div className="header__main">
        <h1> Start Creating your memes!</h1>
        <Link to="/">Templates</Link>
        <Link to="upload">Upload</Link>
        <Link to="/saved">Saved </Link>
        {!sign ? (
          <Link to="/">Login</Link>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
