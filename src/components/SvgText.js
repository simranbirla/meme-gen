import React, { useEffect, useState } from "react";

const SvgText = (props) => {
  const [bound, setBound] = useState({});
  const [drag, setDrag] = useState({ 1: false, 2: false });
  const [positionX, setPositionX] = useState({ 1: "15px", 2: "15px" });
  const [positionY, setPositionY] = useState({ 1: "15px", 2: "25px" });
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
      setPositionY({ ...positionY, [num]: 20 * num });
      setPositionX({ ...positionX, [num]: 15 });
      return true;
    });
    return;
  }, [props.number]);

  const mouseDown = (e, inp) => {
    drag[inp] = true;
    document.addEventListener("mousemove", (e) => mouseMove(e, inp));
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

  const touchStart = (e, inp) => {
    drag[inp] = true;
    document.addEventListener("touchmove", (e) => touchMove(e, inp));
  };

  const touchMove = (e, inp) => {
    if (drag[inp]) {
      const xposition = e.clientX - bound.width;
      const yposition = e.clientY - bound.height;
      setPositionX({ ...positionX, [inp]: xposition });
      setPositionY({ ...positionY, [inp]: yposition });
    }
  };

  const touchEnd = (e, inp) => {
    drag[inp] = false;
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
            onTouchStart={(e) => touchStart(e, inp)}
            onTouchEnd={(e) => touchEnd(e, inp)}
          >
            {props.text[inp]}
          </text>
        );
      })}
    </>
  );
};

export default SvgText;
