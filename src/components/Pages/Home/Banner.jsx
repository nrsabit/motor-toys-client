import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero my-12 bg-cover bg-center rounded"
      style={{
        backgroundImage: `url("https://i.ibb.co/9tFpjkh/bg-toys.jpg")`,
      }}
    >
      <div className="hero-overlay bg-[#E0F4DB] md:min-h-[500px] bg-opacity-70 p-12 md:p-16 rounded"></div>
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold text-gray-900">
            Welcome to MotorToys
          </h1>
          <p className="mb-5 text-gray-700 font-semibold">
            We are really glad to see you in our website, We hope you will found
            every type of motor toys you are looking for.
          </p>
          <p className="mb-5 text-gray-700 font-semibold">
            We will ensure the quality of the toys, and also you will get very
            good warrenty and after sales service from us.
          </p>
          <Link to="/all-toys">
            <button className="btn  border-none hover:text-gray-700 hover:bg-[#E0F4DB] bg-gray-700 text-white outline-0">
              Explore All Toys
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
