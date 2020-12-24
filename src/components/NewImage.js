import React from "react";
import "../Style/Upload.css";

const NewImage = ({ setLink }) => {
  const linkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="newImage">
      <input placeholder="Enter the link" onChange={linkChange} />
    </div>
  );
};

export default NewImage;
