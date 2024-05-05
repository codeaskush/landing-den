import React from "react";
import { UsersIcon, HomeIcon } from "@heroicons/react/outline";

const MainHeroView = () => {
  return (
    <div className=" flex  w-full h-[70vh]">
      <div className="flex w-1/2 bg-transparent-200 px-20 py-20 ">
        <div className="flex-col items-center justify-between bg-transparent-100">
          <div className="text-7xl ">
            <span>
              {" "}
              Where prime smiles meets prime{" "}
              <span className="text-blue-700">Dentists</span>
            </span>
          </div>
          <div className="pt-8 font-light text-2xl">
            Teeth Cleaning & Whitening for confident smile
          </div>
          <div className="flex gap-3 py-7">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
              Book Now
            </button>
            <button className="px-4 py-2 bg-green-700 text-white rounded-full">
              Call for Appointment
            </button>
          </div>
          <div className="flex gap-3 py-2">
            <div className="flex h-8 py-5 items-center">
              <div class="w-3 h-3 flex items-center justify-center rounded-full border-4 border-green-500 bg-transparent" />
              <p className="font-light ml-2 text-xl">Free Appointment</p>
            </div>
            <div className="flex h-8 py-5 items-center">
              <div class="w-3 h-3 flex items-center justify-center rounded-full border-4 border-green-500 bg-transparent" />
              <p className="font-light ml-2 text-xl">Membership Discount</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 h-full bg-green-300">
        <div className="relative">
          <div className="absolute bottom-12 right-6 z-10">
            <div className="bg-white px-6 py-2 rounded-lg">
              <div className="flex py-2 items-center justify-start">
                <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <p className="text-md">
                    <span className="font-semibold">13 Clinics</span> in Nepal
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex py-2 items-center justify-start">
                <UsersIcon className="h-6 w-6 text-blue-600 mr-2" />
                <div>
                  <p className="text-md">
                    <span className="font-semibold">+1,50,00 Customers</span> in
                    Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            className="z-20 h-full object-fill"
            src="images/hero-1.jpg"
            alt="Description"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeroView;
