import React, { useState } from "react";
import { Link } from "react-router-dom";

const LocalImage = () => {
  const [local, setLocal] = useState();

  const fileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setLocal(URL.createObjectURL(img));
    }
  };
  return (
    <div>
      <form>
        <input
          type="file"
          placeholder="Select image local file"
          onChange={fileChange}
        />
        <Link
          to={{
            pathname: `./newImage`,
            source: { name: local },
          }}
        >
          <button>GO</button>
        </Link>
      </form>
    </div>
  );
};

export default LocalImage;
