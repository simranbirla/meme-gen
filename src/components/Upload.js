import React, { useState } from "react";
import NewImage from "./NewImage";
import { Link } from "react-router-dom";
import LocalImage from "./LocalImage";
import "../Style/LocalImage.css";

const Upload = () => {
  const [local, setLocal] = useState("");
  return (
    <div>
      <NewImage link={local} setLink={setLocal} />
      <LocalImage local={local} setLocal={setLocal} />
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
