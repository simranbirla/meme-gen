import React from "react";

const SvgText = (props) => {
  return (
    <>
      {props.number.map((inp, index) => {
        return (
          <text
            style={{ zIndex: "20", fontSize: "20px", fill: "black" }}
            y={100 * inp}
          >
            {inp} This is for testing purposes{index}
          </text>
        );
      })}
    </>
  );
};

export default SvgText;
