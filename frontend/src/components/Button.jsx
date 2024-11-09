import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className=" w-full bg-blue-600 text-white font-semibold py-2 hover:scale-95">
        {children}
      </button>
    </div>
  );
};

export default Button;
