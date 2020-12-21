import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/NewImage.css";

const NewImage = () => {
  const [link, setLink] = useState();

  const linkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="newImage">
      <form className="newImage form">
        <input placeholder="Enter the link" onChange={linkChange} />
        <Link
          to={{
            pathname: `.photos/newImage`,
            source: { name: link },
          }}
          className="btn"
        >
          <button>GO</button>
        </Link>
      </form>
    </div>
  );
};

export default NewImage;
