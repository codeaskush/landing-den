import React from "react";

const ServiceItemView = ({
  type = "Valuable",
  title,
  description,
  imageName,
}) => {
  return (
    <div>
      <div className="flex-col bg-blue-500 px-3 mx-5 pb-2 rounded-2xl text-white items-center justify-center">
        <div className="flex-col px-2 pt-2">
          <div className="px-2 bg-green-500 rounded-full w-fit py-1 mt-2">
            {type}
          </div>
          <p className="text-2xl font-medium py-2 text-start">{title}</p>
          <p className="text-sm font-light text-start">{description}</p>
        </div>

        <div className="flex justify-center items-center pt-4">
          <img
            src={imageName}
            alt="Description"
            className="w-full h-80 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceItemView;
