import React from "react";
import ServiceItemView from "./service-item";

const ServiceDisplayView = () => {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center items-center text-center py-10">
          <p className="text-3xl">
            Explore our <span className="">Best-Selling</span> <br /> treatments
            available
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
      </div>
    </>
  );
};

export default ServiceDisplayView;
