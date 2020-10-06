import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/LocalImage.css";

const LocalImage = () => {
  const [local, setLocal] = useState();

  const fileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setLocal(URL.createObjectURL(img));
    }
  };
  return (
    <div className="localImage">
      <form className="localImage__middle form">
        <label>
          Select an Image
          <input
            type="file"
            placeholder="Select image local file"
            onChange={fileChange}
          />
        </label>
        <Link
          to={{
            pathname: `./newImage`,
            source: { name: local },
          }}
          className="btn"
        >
          <button>GO</button>
        </Link>
      </form>
    </div>
  );
};

export default LocalImage;
