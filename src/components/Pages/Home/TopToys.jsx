import React from "react";

const TopToys = () => {
  return (
    <div className="p-12 md:py-20 bg-base-100 rounded">
      <div className="max-w-lg mx-auto">
        <h1 className="mb-5 text-3xl md:text-5xl text-center font-bold text-gray-900">
          Our Top Rated Toys
        </h1>
        <p className="mb-5 text-gray-700 font-semibold text-center">
          Our Top Rated Toys are Here..
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="bg-[#E0F4DB] overflow-hidden shadow rounded-lg"
          >
            <img
              src="https://i.ibb.co/c1vN3rQ/race-car.jpg"
              alt="Card 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Racing Car</h3>
              <p className="text-gray-700">
                Price:<span className="font-bold"> $250</span>
              </p>
              <p className="text-gray-700">
                Ratting:<span className="font-bold"> 5.0</span>
              </p>
              <p className="text-gray-700">
                Total Sales:<span className="font-bold"> 5000</span>
              </p>
              <p className="text-gray-700">
                Total Reviews:<span className="font-bold"> 4500</span>
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="bg-base-200 overflow-hidden shadow rounded-lg"
          >
            <img
              src="https://i.ibb.co/Xp2fD4f/atv-quad-bike.jpg"
              alt="Card 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">ATV Quad Bike</h3>
              <p className="text-gray-700">
                Price:<span className="font-bold"> $550</span>
              </p>
              <p className="text-gray-700">
                Ratting:<span className="font-bold"> 4.9</span>
              </p>
              <p className="text-gray-700">
                Total Sales:<span className="font-bold"> 8000</span>
              </p>
              <p className="text-gray-700">
                Total Reviews:<span className="font-bold"> 6500</span>
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="bg-[#E0F4DB] overflow-hidden shadow rounded-lg"
          >
            <img
              src="https://i.ibb.co/C93dPVn/red-race-bike.jpg"
              alt="Card 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Red Racing Bike</h3>
              <p className="text-gray-700">
                Price:<span className="font-bold"> $450</span>
              </p>
              <p className="text-gray-700">
                Ratting:<span className="font-bold"> 5.0</span>
              </p>
              <p className="text-gray-700">
                Total Sales:<span className="font-bold"> 4000</span>
              </p>
              <p className="text-gray-700">
                Total Reviews:<span className="font-bold"> 3900</span>
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-duration="1000"
            className="bg-base-200 overflow-hidden shadow rounded-lg"
          >
            <img
              src="https://i.ibb.co/kJ4k9Fm/monster-truck.jpg"
              alt="Card 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Monster Truck</h3>
              <p className="text-gray-700">
                Price:<span className="font-bold"> $850</span>
              </p>
              <p className="text-gray-700">
                Ratting:<span className="font-bold"> 4.8</span>
              </p>
              <p className="text-gray-700">
                Total Sales:<span className="font-bold"> 3000</span>
              </p>
              <p className="text-gray-700">
                Total Reviews:<span className="font-bold"> 2950</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopToys;
