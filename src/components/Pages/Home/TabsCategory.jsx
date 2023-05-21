import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

const TabsCategory = () => {
  const [tab, setTab] = useState("Bikes");
  const [toys, setToys] = useState([]);

  const fetchData = async (category) => {
    fetch(`https://motor-toys-server.vercel.app/tab-toys?tab=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        if (category === "car") {
          setTab("Cars");
        } else if (category === "bike") {
          setTab("Bikes");
        } else if (category === "truck") {
          setTab("Trucks");
        }
      });
  };

  useEffect(() => {
    fetchData("bike");
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1000"
      className="my-16 p-12 md:px-36 md:py-20 bg-[#E0F4DB] rounded"
    >
      <div className="max-w-lg mx-auto">
        <h1 className="mb-5 text-3xl md:text-5xl text-center font-bold text-gray-900">
          Shop by Category
        </h1>
        <p className="mb-5 text-gray-700 font-semibold text-center">
          Our top Categorys listed below
        </p>
      </div>
      <div className="flex justify-center gap-4 my-8">
        <button
          className={`btn btn-sm text-xs rounded-full border-none hover:text-gray-700 hover:bg-[#E0F4DB]  outline-0 ${
            tab === "Cars"
              ? "bg-[#E0F4DB] text-gray-700"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => fetchData("car")}
        >
          Car Toys
        </button>
        <button
          className={`btn btn-sm text-xs rounded-full border-none hover:text-gray-700 hover:bg-[#E0F4DB]  outline-0 ${
            tab === "Bikes"
              ? "bg-[#E0F4DB] text-gray-700"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => fetchData("bike")}
        >
          Bike Toys
        </button>
        <button
          className={`btn btn-sm text-xs rounded-full border-none hover:text-gray-700 hover:bg-[#E0F4DB]  outline-0 ${
            tab === "Trucks"
              ? "bg-[#E0F4DB] text-gray-700"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => fetchData("truck")}
        >
          Truck Toys
        </button>
      </div>

      {/* Cars Tab */}
      <div
        className={`${
          tab === "Cars" ? "block" : "hidden"
        } container mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {toys.map((toy) => (
            <CategoryCard key={toy._id} toy={toy}></CategoryCard>
          ))}
        </div>
      </div>

      {/* Bikes Tab */}
      <div
        className={`${
          tab === "Bikes" ? "block" : "hidden"
        } container mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {toys.map((toy) => (
            <CategoryCard key={toy._id} toy={toy}></CategoryCard>
          ))}
        </div>
      </div>

      {/* Trucks Tab */}
      <div
        className={`${
          tab === "Trucks" ? "block" : "hidden"
        } container mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {toys.map((toy) => (
            <CategoryCard key={toy._id} toy={toy}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsCategory;
