import React from "react";

const SvgText = (props) => {
  return (
    <>
      {props.imageRef
        ? console.log(props.imageRef.getBoundingClientRect())
        : console.log("Shhhhh")}
      {props.number.map((inp, index) => {
        return (
          <text
            key={index}
            style={{
              zIndex: "20",
              fontSize: `${props.size}px`,
              fill: `${props.color}`,
              cursor: "move",
            }}
            onMouseDown={(e) => console.log(e.clientY)}
            onMouseUp={(e) => console.log(e)}
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
