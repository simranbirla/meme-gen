import React from "react";

const OnlineImage = (props) => {
  return (
    <div>
      hello
      <img src={props.location.source.name} />
    </div>
  );
};

export default OnlineImage;
