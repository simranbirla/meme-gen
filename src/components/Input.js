import React from "react";

const Input = (props) => {
  const onInputChange = (e, index) => {
    props.inputChange(e.target.value, index);
  };

  return (
    <div className="inputs">
      {props.number.map((inp) => {
        return (
          <input
            key={inp}
            type="text"
            placeholder={`Enter the text ${inp} `}
            onChange={(e) => onInputChange(e, inp)}
          />
        );
      })}
    </div>
  );
};

export default Input;
