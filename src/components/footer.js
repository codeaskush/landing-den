import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="flex-col">
        <div>  
          <p>Austin,Texas</p>
        </div>
        <div>
          <p>7020 Easy Wind</p>
        </div>
        <div>
          <p>Ausitn,TX 78752</p>
        </div>
        </div>

        <div>
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">MENUS</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Treatments
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              clinics
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Prices
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Locations
            </li>
          </ul>
        </div>
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
        <div>
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">COMPANY</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Our Values
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Our Team
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Career
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">MORES</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Support
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Privacy Policy
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Terms and Conditions
            </li>
          </ul>
        </div>
      </div>

      <div className="flex  items-start justify-between text-end  bg-green-50 pb-10">
        <p>Copyright @2023 Dental.com</p>
        <div className="flex gap-4">
          <p>Change log</p>
          <p>License</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
