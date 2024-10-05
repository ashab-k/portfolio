import React from "react";

const Button = () => {
  return (
    <button className="relative bg-gray-800 text-white font-bold py-2 px-4 rounded group">
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <div className="relative z-10">Hover me</div>
    </button>
  );
};

export default Button;
