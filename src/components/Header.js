import React from "react";
import "../Style/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://i.pinimg.com/originals/48/60/ca/4860ca80d9c9b06bd5a3101ff6802e48.jpg"
          alt="meme man"
        />
      </div>
      <div className="header__main">
        <h1> Start Creating your own memes!!! </h1>
        <h2>Welcome !!!</h2>
      </div>
    </div>
  );
};

export default Header;
