import React from "react";

const Heading = ({ mainHeading, subHeading }) => {
  return (
    <div>
      <h1 className="text-teal-600 text-4xl font-bold">{mainHeading}</h1>
      <p className="mt-[1rem] text-[15px] text-gray-800 text-opacity-80 font-medium">
        {subHeading}
      </p>
    </div>
  );
};

export default Heading;
