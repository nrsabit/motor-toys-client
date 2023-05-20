import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div className="my-16 md:mt-8 p-12 max-w-7xl mx-auto md:px-36 md:pb-12">
      <h1 className="mb-10 text-3xl md:text-5xl text-center font-bold text-gray-900">
        Explore All Toys
      </h1>
      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#E0F4DB]">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                Toy Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                Sub-Category
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider">
                Available Quantity
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {toys.map((toy) => (
              <tr
                key={toy._id}
                className={`${
                  toys.indexOf(toy) % 2 !== 0 ? "bg-[#E0F4DB]" : ""
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={toy.picture}
                    alt={toy.name}
                    className="h-12 w-12 rounded-full"
                  />
                </td>
                <td className="px-6 text-center font-bold py-4 whitespace-nowrap">
                  {toy.name}
                </td>
                <td className="px-6 text-center py-4 whitespace-nowrap">
                  {toy.seller ? toy.seller : "N/A"}
                </td>
                <td className="px-6 text-center py-4 whitespace-nowrap">
                  {toy.category}
                </td>
                <td className="px-6 text-center py-4 whitespace-nowrap">
                  ${toy.price}
                </td>
                <td className="px-6 text-center py-4 whitespace-nowrap">
                  {toy.quantity}
                </td>
                <td className="px-6 text-center py-4 whitespace-nowrap">
                  <button className="btn btn-md border-none hover:text-gray-700 hover:bg-[#E0F4DB] bg-gray-700 text-white outline-0">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
