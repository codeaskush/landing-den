import React from "react";
import { CakeIcon } from "@heroicons/react/outline";

const TestimonialView = () => {
  return (
    <>
      <div className="flex bg-blue-500 items-center justify-center mx-auto">
        <div className="flex-col max-w-screen-xl py-14  text-white ">
          <div className="w-1/2">
            <p className="text-5xl">
              The dental friend experience <br /> that takes care of you better
            </p>
            <p className="font-extralight text-sm pt-5">
              Our dental has dedicated 3 branches in Kathmandu where we provide
              first-class services to our customers. Here are some of our
              reviews which we are really proud of.
            </p>
          </div>
          <div className="flex gap-7 py-10">
            <div className=" flex w-1/2 items-center justify-center">
              <div className=" font-light">
                <div className="flex border border-white w-fit px-3 py-1 rounded-full justify-center items-center">
                  <CakeIcon className="w-4 h-5 mx-1 text-white" />
                  <p>Testimonial</p>
                </div>
                <p className="text-2xl mt-7">
                  "I am incredibly impressed with the professionalism and care
                  provided by the dental team at XYZ Dental Clinic. From the
                  moment I walked in, I felt welcomed and at ease. The staff was
                  attentive to my needs and took the time to explain each step
                  of the procedure. Thanks to their expertise and gentle
                  approach, I now have a beautiful smile that I am proud to show
                  off. I highly recommend XYZ Dental Clinic to anyone seeking
                  exceptional dental care."
                </p>
                <p className="text-base mt-5 font-mono">Josh Carrot</p>
                <p className="text-base font-mono">Student</p>
              </div>
            </div>
            <div className=" w-1/2">
              <img
                src={"images/testimonial.jpg"}
                alt="Description"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-5 h-1.5 bg-white rounded-lg border border-white" />
            <div className="w-5 h-1.5 bg-transparent rounded-lg border border-white" />
            <div className="w-5 h-1.5 bg-transparent rounded-lg border border-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialView;
