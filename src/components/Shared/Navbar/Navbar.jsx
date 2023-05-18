import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo-dark.png";
import { BiMenuAltRight, BiWindowClose } from "react-icons/bi";
import ActiveLInk from "./ActiveLInk";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#E0F4DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-12 w-12 rounded" src={logo} alt="Logo" />
            <span className="text-gray-700 text-lg font-semibold ml-2">
              MotorToys
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center -mr-2 sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-700 hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <BiWindowClose className="text-gray-700 w-8 h-8"></BiWindowClose>
              ) : (
                <BiMenuAltRight className="text-gray-700 w-8 h-8"></BiMenuAltRight>
              )}
            </button>
          </div>

          {/* Middle */}
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="space-x-4">
              <ActiveLInk to="/">Home</ActiveLInk>
              <ActiveLInk to="/blogs">Blogs</ActiveLInk>
              <ActiveLInk to="/all-toys">All Toys</ActiveLInk>
              <ActiveLInk to="/my-toys">My Toys</ActiveLInk>
              <ActiveLInk to="/add-toy">Add Toy</ActiveLInk>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden sm:flex items-center">
            <button className="text-gray-700 hover:bg-gray-300 hover:text-white px-3 rounded-md text-sm font-medium btn btn-outline btn-sm">
              Login
            </button>
            <div className="ml-2">
              <img
                className="h-8 w-8 rounded-full"
                src="/logo-light.png"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden mt-2`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <ActiveLInk to="/" customClass="block">Home</ActiveLInk>
            <ActiveLInk to="/blogs" customClass="block">Blogs</ActiveLInk>
            <ActiveLInk to="/all-toys" customClass="block">All Toys</ActiveLInk>
            <ActiveLInk to="/my-toys" customClass="block">My Toys</ActiveLInk>
            <ActiveLInk to="/add-toy" customClass="block">Add Toy</ActiveLInk>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-400">
            <div className="flex items-center">
              <div>
                <img
                  className="h-8 w-8 rounded-full"
                  src="/logo-light.png"
                  alt="Profile"
                />
              </div>
              <div className="ml-2">
                <button className="text-gray-700 btn btn-outline hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
