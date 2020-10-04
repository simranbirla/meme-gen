import React, { useEffect, useState } from "react";

const SvgText = (props) => {
  const [bound, setBound] = useState({});
  const [drag, setDrag] = useState({ 1: false, 2: false });
  const [positionX, setPositionX] = useState({ 1: "15px", 2: "15px" });
  const [positionY, setPositionY] = useState({ 1: "75px", 2: "150px" });
  const boundary = () => {
    if (props.imageRef) {
      setBound({
        height: props.imageRef.getBoundingClientRect().top,
        width: props.imageRef.getBoundingClientRect().left,
      });
    }
  };

  useEffect(() => {
    boundary();
    return;
  }, [props.imageRef]);

  useEffect(() => {
    props.number.map((num) => {
      setDrag({ ...drag, [num]: false });
      setPositionY({ ...positionY, [num]: 75 * num });
      setPositionX({ ...positionX, [num]: 15 });
    });
    return;
  }, [props.number]);

  const mouseDown = (e, inp) => {
    drag[inp] = true;
    document.addEventListener("mousemove", (e) => mouseMove(e, inp));
    console.log(drag);
  };

  const mouseMove = (e, inp) => {
    if (drag[inp]) {
      //console.log(positionY[inp], e.clientX, bound.width);
      const xposition = e.clientX - bound.width;
      const yposition = e.clientY - bound.height;
      setPositionX({ ...positionX, [inp]: xposition });
      setPositionY({ ...positionY, [inp]: yposition });
    }
  };

  const mouseUp = (e, inp) => {
    drag[inp] = false;
  };

  return (
    <>
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
            onMouseDown={(e) => mouseDown(e, inp)}
            onMouseUp={(e) => mouseUp(e, inp)}
            y={positionY[inp]}
            x={positionX[inp]}
          >
            {props.text[inp]}
          </text>
        );
      })}
    </>
  );
};

export default SvgText;
