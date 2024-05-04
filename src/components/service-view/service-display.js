import React from "react";
import ServiceItemView from "./service-item";

const ServiceDisplayView = () => {
  return (
    <>
      <div className="bg-slate-50 pb-5">
        <div className="flex justify-center items-center text-center py-10">
          <p className="text-4xl">
            Explore our <span className="text-blue-700">Best-Selling</span>{" "}
            <br /> treatments available
          </p>
        </div>
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-3">
              <ServiceItemView
                type="Popular"
                title={"Dentures and Implants 1"}
                description={"Restore the aesthetics and functions"}
                imageName={"images/braces-1.jpg"}
              />
            </div>
            <div className="col-span-4">
              <ServiceItemView
                title={"Dental Braces"}
                description={"Bring your best smile with symmetric teeth"}
                imageName={"images/hero-1.jpg"}
              />
            </div>
            <div className="col-span-3">
              <ServiceItemView
                type="Aesthetic"
                title={"Dental Vaneer"}
                description={"Improve the apperance of your teeth"}
                imageName={"images/braces-1.jpg"}
              />
            </div>
          </div>
        </div>
        <div className=" flex border-green-500 border-2 text-green-600 w-fit justify-center items-center mx-auto my-5 rounded-lg transition duration-200 ease-in-out hover:bg-green-700 hover:text-white hover:border-green-700">
          <div className="text-center px-5 py-2">See All Services</div>
        </div>
      </div>
    </>
  );
};

export default ServiceDisplayView;
