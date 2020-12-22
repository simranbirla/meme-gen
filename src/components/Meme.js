import React, { useState, useEffect } from "react";
import Input from "./Input";
import SvgText from "./SvgText";
import saveImage from "./saveImage";
import "../Style/Meme.css";

const Meme = (props) => {
  const [text, setText] = useState({});
  const [imageRef, setImageRef] = useState();
  const [svgRef, setSVG] = useState("");
  const [inarr, setInarr] = useState([1, 2]);
  const [base64, setBase64] = useState();
  const [color, setColor] = useState("black");
  const [font, setFont] = useState(20);
  const [progress, setProgress] = useState(0);

  const addInput = () => {
    setInarr([...inarr, inarr.length + 1]);
  };

  const decideImage = () => {
    if (props.location.source !== undefined) {
      return props.location.source.name;
    }
    return require(`../images/${props.match.params.photo}`);
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
    //console.log(url);
    img.src = url;
  };

  const downloadImage = () => {
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

  const saveImg = () => {
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
      saveImage(canvasData, setProgress, props.user.uid);
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

  const fontSize = (e) => {
    setFont(e.target.value);
  };

  useEffect(() => {
    convertURI(decideImage());
    return () => {
      setBase64("");
    };
  }, []);

  return (
    <div className="meme">
      <div className="meme__left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="svg"
          ref={(el) => setSVG(el)}
        >
          <image
            xlinkHref={base64}
            width="100%"
            height="100%"
            ref={(el) => setImageRef(el)}
          />

          <SvgText
            number={inarr}
            text={text}
            color={color}
            size={font}
            imageRef={imageRef}
          />
        </svg>

        <button onClick={downloadImage}>Download</button>
        <button onClick={saveImg}>Save</button>
      </div>

      <div className="meme__middle">
        <Input number={inarr} inputChange={inputChange} />
        <button onClick={addInput}>ADD</button>
      </div>
      <div className="meme__right">
        <div className="meme__right colors">
          <h3>Select Font Color:</h3>
          <ul className="meme__right colors-list">
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

        <div className="meme__right font-size">
          <label>
            Select a Font Size
            <select onChange={fontSize}>
              <option value="16">16</option>
              <option value="10">10</option>
              <option value="18">18</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Meme;
