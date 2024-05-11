import React from "react";

const SimpleFooter = () => {
  return (
    <>
      <div className="bg-gray-100 h-1/2 w-full flex flex-row  justify-around items-start p-20">
        <div className="flex-col">
          <div>
            <p>Apple Dental Clinic</p>
          </div>
          <div>
            <p>Panipokhari, Lazimpat</p>
          </div>
          <div>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>

        <div>
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">MENUS</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Home
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Services
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Contact
            </li>
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Locations
            </li> */}
          </ul>
        </div>
        {/* 2nd */}
        {/* <div>
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">SERVICES</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Dental Veneers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Dental Braces
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Teeth Whitening
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Dental Implants
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              View More
            </li>
          </ul>
        </div> */}
        {/* Services */}
        <div>
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">SERVICES</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Dental Veneers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Dental Braces
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Teeth Whitening
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Dental Implants
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              View More
            </li>
          </ul>
        </div>
        {/* 4th */}
        <div>
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">SOCIALS</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Instagram
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Tiktok
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Facebook
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Email
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">CONTACT</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              9860773808
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              9860773808
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              9860773808
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-between mx-auto max-w-screen-2xl py-5">
        <p>Copyright @2024 Apple Dental Clinic</p>
        <div className="flex gap-4">
          <p>Change log</p>
          <p>License</p>
        </div>
      </div>
    </>
  );
};

export default SimpleFooter;
