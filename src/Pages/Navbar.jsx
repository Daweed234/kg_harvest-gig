import React from "react";
import { FiSun } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <nav className="px-5 py-3 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">KG Harvest</p>
            <div className="flex justify-center items-center flex-grow">
              <p className="text-sm md:text-base hover:-translate-y-3 duration-300 font-medium">Home</p>
              <p className="ml-8 text-sm md:text-base hover:-translate-y-3 duration-300 md:ml-12 font-medium">About</p>
              <p className="ml-8 text-sm md:text-base hover:-translate-y-3 duration-300 md:ml-12 font-medium">Services</p>
            </div>
            <div className="flex flex-row gap-5">
            <FiSun className="text-xl mt-3 hover:-translate-y-3 duration-300"/>
            <button className="text-sm px-4 py-2 md:py-3 rounded-md text-white bg-blue-500 md:text-base hover:-translate-y-2 duration-300">
              Contact
            </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
