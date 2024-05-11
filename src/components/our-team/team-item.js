import React from "react";
import DoctorItem from "./doctor-item";

const TeamItemView = () => {
  return (
    <>
      <div className="flex flex-col  w-full mx-auto justify-center items-center">
        <div className="max-w-screen-xl  w-full py-10">
          <div className="text-5xl">
            <span className="text-blue-600">The Dream Team</span> at your
            service
          </div>
          <div className="text-sm py-4">
            Our team comprises of the best dentists and orthodontists who are
            exceptional in solving any dental related problems
          </div>
          <div>
            <grid className="grid grid-cols-3 gap-7">
              <DoctorItem
                name={"Luna Ghimire"}
                department={"Dentist"}
                nmc={"BDS - TU"}
                image={"images/doctor-1.jpg"}
                key={"1"}
              />
              <DoctorItem
                name={"Gaurav Acharya"}
                department={"Orthodontists"}
                nmc={"MDS - TU"}
                image={"images/doctor-1.jpg"}
                key={"1"}
              />
              <DoctorItem
                name={"Luna Ghimire"}
                department={"Dentist"}
                nmc={"BDS - TU"}
                image={"images/doctor-1.jpg"}
                key={"1"}
              />
              <DoctorItem
                name={"Gaurav Acharya"}
                department={"Orthodontists"}
                nmc={"MDS - TU"}
                image={"images/doctor-1.jpg"}
                key={"1"}
              />
              <DoctorItem
                name={"Luna Ghimire"}
                department={"Dentist"}
                nmc={"BDS - TU"}
                image={"images/doctor-1.jpg"}
                key={"1"}
              />
              <DoctorItem
                name={"Gaurav Acharya"}
                department={"Orthodontists"}
                nmc={"MDS - TU"}
                image={"images/doctor-1.jpg"}
                key={"1"}
              />
            </grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItemView;
