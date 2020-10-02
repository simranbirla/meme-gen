import React, { useState, useEffect } from "react";
import Input from "./Input";
import SvgText from "./SvgText";
const Meme = (props) => {
  const [text, setText] = useState("");
  const [inarr, setInarr] = useState([1, 2]);
  const [base64, setBase64] = useState();
  const addInput = () => {
    setInarr([...inarr, inarr.length + 1]);
  };

  const inputChange = (e) => {
    setText(e.target.value);
  };

  const convertURI = (url) => {
    const img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL(
        `${url.includes(".png") ? "image/png " : "image/jpeg"}`
      );
      setBase64(dataURL);
    };
    img.src = url;
  };

  useEffect(() => {
    convertURI(require(`../images/${props.match.params.photo}`));
    return () => {
      setBase64("");
    };
  }, []);

  return (
    <div className="meme">
      <p>{base64}</p>
      <div className="meme__top">
        <input
          type="text"
          placeholder="Enter the Text"
          onChange={inputChange}
        />
        <Input number={inarr} />
        <button onClick={addInput}>ADD</button>
      </div>
      <div className="meme__middle">
        <svg
          width="400px"
          height="400px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ backgroundColor: "white", color: "white" }}
          className="svg"
        >
          <image
            xlinkHref={require(`../images/${props.match.params.photo}`)}
            width="100%"
            height="100%"
          />

          <SvgText number={inarr} />
        </svg>
      </div>
    </div>
  );
};

export default Meme;
