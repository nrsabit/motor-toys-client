import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    document.title = 'MotorToys | Toy Details'
  const toy = useLoaderData();
  const {
    picture,
    name,
    seller_name,
    seller_email,
    description,
    quantity,
    price,
    rating,
  } = toy;
  return (
    <div className="my-16">
      <h1 className="mb-10 text-3xl md:text-5xl text-center font-bold text-gray-900">
        Our Product Details
      </h1>
      <div className="hero rounded md:p-12 bg-[#E0F4DB] max-w-7xl mx-auto">
        <div className="hero-content flex-col lg:flex-row gap-5">
          <img src={picture} className="w-full md:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl mb-4 font-bold">{name}</h1>
            <p>
              Price: <span className="font-bold">${price}</span>
            </p>
            <p>
              Seller Name:{" "}
              <span className="font-bold">
                {seller_name ? seller_name : "N/A"}
              </span>
            </p>
            <p>
              Seller Email:{" "}
              <span className="font-bold">
                {seller_email ? seller_email : "N/A"}
              </span>
            </p>
            <p>
              Available Quantity: <span className="font-bold">{quantity}</span>
            </p>
            <p>
              Rating: <span className="font-bold">{rating}</span>
            </p>
            <p>
              Description: <span className="font-bold">{description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
