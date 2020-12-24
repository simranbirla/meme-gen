import React from "react";
import "../Style/Upload.css";

const LocalImage = ({ setLocal }) => {
  const fileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setLocal(URL.createObjectURL(img));
    }
  };
  return (
    <div className="localImage">
      <label>
        Select an Image
        <input
          type="file"
          placeholder="Select image local file"
          onChange={fileChange}
        />
      </label>
    </div>
  );
};

export default LocalImage;
