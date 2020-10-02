import React, { useState, useEffect } from "react";
import Input from "./Input";
import SvgText from "./SvgText";
const Meme = (props) => {
  const [text, setText] = useState({});
  const [svgRef, setSVG] = useState("");
  const [inarr, setInarr] = useState([1, 2]);
  const [base64, setBase64] = useState();
  const [color, setColor] = useState("black");
  const addInput = () => {
    setInarr([...inarr, inarr.length + 1]);
  };

  const inputChange = (e, index) => {
    setText({ ...text, [index]: e });
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

  const saveImage = () => {
    const svgEl = svgRef;
    let svgData = new XMLSerializer().serializeToString(svgEl);
    const svgSize = svgEl.getBoundingClientRect();
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    canvas.height = svgSize.height;
    canvas.width = svgSize.width;
    const meme = new Image();
    meme.onload = function () {
      canvas.getContext("2d").drawImage(meme, 0, 0);
      const canvasData = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = "meme.png";
      a.href = canvasData;
      document.body.appendChild(a);
      a.click();
    };
    meme.setAttribute(
      "src",
      "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)))
    );
    return true;
  };

  const fontColor = (e) => {
    setColor(e.target.innerHTML);
  };

  useEffect(() => {
    convertURI(require(`../images/${props.match.params.photo}`));
    return () => {
      setBase64("");
    };
  }, []);

  return (
    <div className="meme">
      <div className="meme__top">
        <Input number={inarr} inputChange={inputChange} />
        <button onClick={addInput}>ADD</button>
        <div className="meme_top colors">
          <ul style={{ cursor: "pointer" }} className="colors__list">
            <li onClick={fontColor} className="color black">
              Black
            </li>
            <li onClick={fontColor} className="color red">
              Red
            </li>
            <li onClick={fontColor} className="color yellow">
              Yellow
            </li>
            <li onClick={fontColor} className="color white">
              White
            </li>
            <li onClick={fontColor} className="color blue">
              Blue
            </li>
            <li onClick={fontColor} className="color green">
              Green
            </li>
          </ul>
        </div>
      </div>
      <div className="meme__middle">
        <svg
          width="400px"
          height="400px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ backgroundColor: "white", color: "white" }}
          className="svg"
          ref={(el) => setSVG(el)}
        >
          <image xlinkHref={base64} width="100%" height="100%" />

          <SvgText number={inarr} text={text} color={color} />
        </svg>
        <button onClick={saveImage}>Download</button>
      </div>
    </div>
  );
};

export default Meme;
