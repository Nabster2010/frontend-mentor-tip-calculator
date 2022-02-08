import React from "react";
// import propTypes from "prop-types";

const MyButton = ({ value, setTip, active }) => {
  const handleClick = () => {
    setTip(value);
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        active
          ? " bg-hoverCyan text-veryDarkCyan"
          : "bg-veryDarkCyan text-white"
      } rounded-md border-0 
     py-3 text-xl font-bold   transition hover:bg-hoverCyan hover:text-veryDarkCyan `}
    >
      {value}%
    </button>
  );
};

export default MyButton;
