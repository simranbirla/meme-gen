import React, { useState } from "react";
import { Link } from "react-router-dom";
const NewImage = () => {
  const [link, setLink] = useState();

  const linkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div>
      <form>
        <input placeholder="enter the link" onChange={linkChange} />
        <Link
          to={{
            pathname: `./newImage`,
            source: { name: link },
          }}
        >
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default NewImage;
