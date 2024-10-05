import React from "react";

const NavBar = () => {
  return (
    <nav className="w-[100%] flex items-center justify-center fixed top-0 backdrop-blur-md z-30 py-7">
      <ul className=" w-[90%] md:w-[76%] flex justify-between  py-2 px-3">
        <li>About Me</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Experience</li>
      </ul>
    </nav>
  );
};

export default NavBar;
