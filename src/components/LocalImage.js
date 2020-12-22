import React from "react";

const LocalImage = ({ setLocal }) => {
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
      </form>
    </div>
  );
};

export default LocalImage;
