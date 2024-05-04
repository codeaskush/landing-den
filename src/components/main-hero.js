import React from "react";

const MainHeroView = () => {
  return (
    <div className=" flex items-center justify-between w-full ">
      <div className="flex w-1/2 bg-green-200 px-20 ">
        <div className="flex-col items-center justify-between">
          <div className="text-7xl ">
            <span>
              {" "}
              Where prime smiles meets prime{" "}
              <span className="text-blue-700">Dentists</span>
            </span>
          </div>
          <div className="py-5 font-light">
            Teeth Cleaning & Whitening for confident smile
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
              Book Now
            </button>
            <button className="px-4 py-2 bg-green-700 text-white rounded-full">
              Call for Appointment
            </button>
          </div>
          <div className="flex">
            <div className="flex h-8 py-5 items-center">
              <div class="w-3 h-3 flex items-center justify-center rounded-full border-4 border-green-500 bg-transparent" />
              <p className="font-light ml-2">Free Appointment</p>
            </div>
            <div className="flex h-8 py-5 items-center">
              <div class="w-3 h-3 flex items-center justify-center rounded-full border-4 border-green-500 bg-transparent" />
              <p className="font-light ml-2">Membership Discount</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 bg-cyan-200">
        <div className="flex items-center justify-between">
          <div className="text-7xl px-40 py-20">
            Where prime smiles meets prime{" "}
            <span className="text-blue-700">Dentists</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeroView;
