import React from "react";
import { UsersIcon, HomeIcon } from "@heroicons/react/outline";

const NavbarTop = () => {
  return (
    <nav className=" flex items-center justify-between mx-100 py-3 shadow-md  sticky top-0 bg-white z-50">
      <div>
        <div className="w-10 h-10 flex justify-center items-center">
          <HomeIcon className="w-7 h-7 text-blue-500 ml-3" />
        </div>
      </div>
      <ul className="flex items-center justify-center">
        <li className="ml-6">
          <a
            href="#"
            className="transition duration-200 ease-in-out hover:text-blue-600 "
          >
            Home
          </a>
        </li>
        <li className="ml-6">
          <a
            href="#"
            className="transition duration-200 ease-in-out hover:text-blue-600 "
          >
            About
          </a>
        </li>
        <li className="ml-6">
          <a
            href="#"
            className="transition duration-200 ease-in-out hover:text-blue-600 "
          >
            Services
          </a>
        </li>
        <li className="ml-6">
          <a
            href="#"
            className="transition duration-200 ease-in-out hover:text-blue-600 "
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <button className="px-4 py-2 bg-transparent-500 text-blue-600 rounded-full text-sm font-semibold">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default NavbarTop;
