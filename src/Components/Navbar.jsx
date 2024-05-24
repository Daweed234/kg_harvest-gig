import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="sticky top-0 sm:bg-zinc-500 sm:w-auto bg-white z-50">
      <nav className="px-5 py-3 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg hover:cursor-pointer md:text-base md:font-semibold md:w-40">KG Harvest</p>
            <div className="flex justify-center items-center flex-grow">
              
                <p className="text-sm md:text-base hover:-translate-y-1 duration-300 font-medium hover:cursor-pointer">
                  Home
                </p>
                  <p className="ml-8 text-sm md:text-base hover:-translate-y-1 duration-300 md:ml-12 font-medium hover:cursor-pointer">
                    About
                </p>
                <p className="ml-8 text-sm md:text-base hover:-translate-y-1 duration-300 md:ml-12 font-medium hover:cursor-pointer">
                Services
                </p>
            </div>
            <div className="flex flex-row gap-5">
                <button className="text-sm px-4 py-2 md:py-3 rounded-md text-white bg-blue-500 md:text-base hover:-translate-y-2 hover:bg-blue-600 duration-300">
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
