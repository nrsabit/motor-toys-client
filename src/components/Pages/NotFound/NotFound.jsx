import React from "react";
import { Link } from "react-router-dom";
// https://i.ibb.co/2yN7JnF/404-snow.gif
const NotFound = () => {
    document.title = 'MotorToys | 404'
  return (
    <div className="my-8 md:mt-8 p-12 max-w-7xl mx-auto md:px-36 bg-base-200 md:flex md:flex-col md:items-center md:justify-center">
      <h1 className="mb-10 text-3xl md:text-5xl text-center font-bold text-gray-900">
        Page Not Found
      </h1>
      <Link to="/">
        <button className="btn mb-5 border-none hover:text-gray-700 hover:bg-[#E0F4DB] bg-gray-700 text-white outline-0 text-center">
          Back to Home
        </button>
      </Link>
      <img className="rounded shadow-lg text-center" src="https://i.ibb.co/2yN7JnF/404-snow.gif" alt="" />
    </div>
  );
};

export default NotFound;
