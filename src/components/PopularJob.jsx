import Heading from "@/shared/Heading";
import React from "react";
import JobCard from "./JobCard";

const PopularJob = () => {
  return (
    <div className="pt-8 md:pt-20 pb-8 md:pb-12">
      {/* Heading */}
      <Heading mainHeading="Popular Job Categories" />

      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6 items-center">
        <JobCard
          image="/images/icon1.png"
          category="Finance"
          openPosition="23"
        />
        <JobCard
          image="/images/icon2.png"
          category="Marketing"
          openPosition="13"
        />
        <JobCard image="/images/icon3.png" category="Sales" openPosition="53" />
        <JobCard
          image="/images/icon4.png"
          category="Development"
          openPosition="13"
        />
        <JobCard image="/images/icon5.png" category="HR" openPosition="10" />
        <JobCard
          image="/images/icon6.png"
          category="Teacher"
          openPosition="8"
        />
        <JobCard
          image="/images/icon7.png"
          category="Mechanic"
          openPosition="42"
        />
        <JobCard
          image="/images/icon8.png"
          category="Retailer"
          openPosition="25"
        />
        <JobCard
          image="/images/icon9.png"
          category="Business"
          openPosition="31"
        />
      </div>
    </div>
  );
};

export default PopularJob;
