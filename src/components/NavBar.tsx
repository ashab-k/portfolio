import React from "react";

const NavBar = () => {
  return (
    <nav className="w-[100%] flex items-center justify-center fixed top-0 backdrop-blur-md z-30 py-3 lg:py-7">
      <ul className=" w-[90%] md:w-[50%] flex justify-between font-bold py-2 px-3">
        <li className="hover:scale-110 transition-all">
          <a href="#hero">About</a>
        </li>
        <li className="hover:scale-110 transition-all">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:scale-110 transition-all">
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
