import React from "react";
import "../Style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left"></div>
      <div className="header__main">
        <h1> Start Creating your memes!</h1>
        <Link to="/">Templates</Link>
        <Link to="upload">Upload</Link>
        <Link to="/saved"></Link>
      </div>
    </div>
  );
};

export default Header;
