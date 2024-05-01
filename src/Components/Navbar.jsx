import React from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../ThemeProvider";

const Navbar = () => {
  return (
    <div className="sticky top-0  bg-white z-50">
      <nav className="px-5 py-3 shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg hover:cursor-pointer">KG Harvest</p>
            <div className="flex justify-center items-center flex-grow">
              <Link to='/'>
                <p className="text-sm md:text-base hover:-translate-y-1 duration-300 font-medium hover:cursor-pointer">
                  Home
                </p>
              </Link>
              <Link to='/aboutus'>
                <p className="ml-8 text-sm md:text-base hover:-translate-y-1 duration-300 md:ml-12 font-medium hover:cursor-pointer">
                  About
                </p>
              </Link>
              <Link to='/services'>
                <p className="ml-8 text-sm md:text-base hover:-translate-y-1 duration-300 md:ml-12 font-medium hover:cursor-pointer">
                  Services
                </p>
              </Link>
            </div>
            <div className="flex flex-row gap-5">
              <Link to='/contact'>
                <button className="text-sm px-4 py-2 md:py-3 rounded-md text-white bg-blue-500 md:text-base hover:-translate-y-2 hover:bg-blue-600 duration-300">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
