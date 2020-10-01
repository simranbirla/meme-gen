import React, { useState } from "react";

const Meme = (props) => {
  const [text, setText] = useState("");

  const inputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="meme">
      <p>HELLO create your MEME here!!</p>
      <div className="meme__top">
        <input
          type="text"
          placeholder="Enter the Text"
          onChange={inputChange}
        />
      </div>
      <div className="meme__middle">
        <svg
          width="400px"
          height="400px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ backgroundColor: "pink", color: "white" }}
          className="svg"
        >
          <image
            xlinkHref={require(`../images/${props.match.params.photo}`)}
            width="100%"
            height="100%"
          />
          <text
            style={{ zIndex: "20", fontSize: "20px", fill: "black" }}
            y="100px"
          >
            To see IF this is working
            {text}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Meme;
