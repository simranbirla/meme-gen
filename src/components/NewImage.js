import React from "react";
import "../Style/NewImage.css";

const NewImage = ({ setLink }) => {
  const linkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="newImage">
      <form className="newImage form">
        <input placeholder="Enter the link" onChange={linkChange} />
      </form>
    </div>
  );
};

export default NewImage;
