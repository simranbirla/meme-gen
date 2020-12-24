import React, { useState } from "react";
import NewImage from "./NewImage";
import { Link } from "react-router-dom";
import LocalImage from "./LocalImage";
import "../Style/Upload.css";

const Upload = () => {
  const [local, setLocal] = useState("");
  return (
    <div className="upload">
      <NewImage link={local} setLink={setLocal} />
      <LocalImage local={local} setLocal={setLocal} />
      {local ? <img src={local} width="300px" height="300px" /> : null}
      <Link
        to={{
          pathname: `./photos/newImage`,
          source: { name: local },
        }}
        className="btn"
      >
        <button>Create</button>
      </Link>
    </div>
  );
};

export default Upload;
