import React from "react";
import logo from "/logo-dark.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E0F4DB]">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <img className="h-12 w-12 rounded" src={logo} alt="Logo" />
            <span className="text-gray-700 font-semibold text-lg">
              MotorToys
            </span>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center items-center">
            <span className="text-gray-700 font-semibold text-lg">
              The Best Collection of Motor Toys
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-8">
          <div className="text-center md:text-left">
            <p className="text-gray-700">Address: 000 Street, City, Country</p>
            <p className="text-gray-700">Phone: +1 234 567 890</p>
            <p className="text-gray-700">Email: motor@toys.com</p>
          </div>
          <div className="flex justify-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-gray-300">
              <FaFacebook className="w-8 h-8"></FaFacebook>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-300">
              <FaGithub className="w-8 h-8"></FaGithub>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-300">
              <FaLinkedin className="w-8 h-8"></FaLinkedin>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center text-gray-700 text-sm">
            &copy; {new Date().getFullYear()} MotorToys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
