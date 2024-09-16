import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto bg-white ">
      <input
        placeholder="Job Title, Company Name"
        className=" w-full h-14 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-200  hover:outline-none focus:ring-teal-200 focus:border-teal-200"
        type="text"
        name="query"
        id="query"
      />
      <button
        type="submit"
        className="absolute inline-flex items-center h-8 px-4 py-2 text-sm text-white transition duration-150 ease-in-out  outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        
        Search
      </button>
    </div>
  );
};

export default SearchBar;
