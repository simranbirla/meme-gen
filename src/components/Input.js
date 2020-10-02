import React from "react";

const Input = (props) => {
  return (
    <div>
      {props.number
        .filter((inp) => inp < 5)
        .map((inp) => {
          return <input type="text" placeholder={`Enter the text ${inp} `} />;
        })}
    </div>
  );
};

export default Input;
