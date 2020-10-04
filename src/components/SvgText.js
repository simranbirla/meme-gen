import React, { useEffect, useState } from "react";

const SvgText = (props) => {
  const [bound, setBound] = useState({});

  const boundary = () => {
    if (props.imageRef) {
      setBound({
        height: props.imageRef.getBoundingClientRect().height,
        width: props.imageRef.getBoundingClientRect().width,
      });
    }
  };

  useEffect(() => {
    boundary();
    return;
  }, [props.imageRef]);

  return (
    <>
      {console.log(bound)}
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
