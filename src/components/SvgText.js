import React from "react";

const SvgText = (props) => {
  return (
    <>
      {console.log(props.text)}
      {props.number.map((inp, index) => {
        return (
          <text
            style={{ zIndex: "20", fontSize: "20px", fill: `${props.color}` }}
            y={75 * inp}
          >
            {props.text[inp]}
          </text>
        );
      })}
    </>
  );
};

export default SvgText;
