import React from "react";

const Galary = () => {
  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/Xp2fD4f/atv-quad-bike.jpg",
      alt: "ATV Quad Bike",
    },
    {
      id: 2,
      src: "https://i.ibb.co/Qjq0B5T/dirt-bike.jpg",
      alt: "Dirt Bike",
    },
    {
      id: 3,
      src: "https://i.ibb.co/9TBqMks/moto-racer.jpg",
      alt: "Moto Racer",
    },
    {
      id: 4,
      src: "https://i.ibb.co/fGstkWW/police-motorcycle.jpg",
      alt: "Police Motorcycle",
    },
    {
      id: 5,
      src: "https://i.ibb.co/kJ4k9Fm/monster-truck.jpg",
      alt: "Monster Truck",
    },
    {
      id: 6,
      src: "https://i.ibb.co/pr2dmJM/blue-police-car.jpg",
      alt: "Blue Police Car",
    },
    {
      id: 7,
      src: "https://i.ibb.co/zXgnqby/motorcycle.jpg",
      alt: "Motorcycle",
    },
    {
      id: 8,
      src: "https://i.ibb.co/t8RHBRf/police-car.jpg",
      alt: "Black Police Car",
    },
  ];
  return (
    <div className="my-16">
      <div className="max-w-lg mx-auto">
        <h1 className="mb-5 text-3xl md:text-5xl text-center font-bold text-gray-900">
          Some of Our Beautiful Toys
        </h1>
        <p className="mb-5 text-gray-700 font-semibold text-center">
          Here you will see some of our amazing toys, We hop you will love those toys
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
            key={image.id}
            className="relative flex justify-center items-center"
          >
            <img className="w-full h-auto rounded" src={image.src} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#E0F4DB] bg-opacity-50 rounded">
              <span className="text-gray-900 text-2xl font-bold">
                {image.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galary;
