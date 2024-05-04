import React from "react";

const NavbarTop = () => {
  return (
    <nav className="bg-gray-300 flex items-center justify-between mx-100 ">
      <div>
        <div className="w-10 h-10 bg-red-400 flex justify-center items-center">
          X
        </div>
      </div>
      <ul className="flex items-center justify-center">
        <li className="ml-6">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li className="ml-6">
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li className="ml-6">
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li className="ml-6">
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <a href="#" className="mr-4 hover:text-gray-300">
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default NavbarTop;
