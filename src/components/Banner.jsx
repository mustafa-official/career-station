import React from "react";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <div className="max-w-4xl mt-20 md:mt-24 mx-auto text-center flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 md:!leading-[50px]">
        Career Station create career, Just keep hard working!
      </h1>
      <p className="text-2xl font-semibold text-teal-600 mb-8">7500+ Active Vacancies, Available Right Now!</p>
      <SearchBar />
    </div>
  );
};

export default Banner;
