import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <div>
      <button
        className={`${className} px-8 py-2.5 rounded-full transition-all duration-500 bg-black text-white `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
