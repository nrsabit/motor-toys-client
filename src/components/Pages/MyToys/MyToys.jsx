import React, { useContext, useEffect, useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiEdit, BiWindowClose } from "react-icons/bi";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  document.title = "MotorToys | My Toys";
  const [toys, setToys] = useState([]);
  const [editToy, setEditToy] = useState({});
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://motor-toys-server.vercel.app/delete-toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    if(price === editToy.price && quantity === editToy.quantity && description === editToy.description){
        Swal.fire('Nothing to Update')
    }
    const updatedToy = { price, quantity, description };

    fetch(`https://motor-toys-server.vercel.app/update-toy/${editToy._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your file has been Updated.", "success");
          const remaining = toys.filter((toy) => toy._id !== editToy._id);
          const current = toys.find((toy) => toy._id === editToy._id);
          current.price = updatedToy.price;
          current.quantity = updatedToy.quantity;
          current.description = updatedToy.description;
          const newToysCollection = [current, ...remaining];
          setToys(newToysCollection);
        }
      });
  };

  useEffect(() => {
    fetch(`https://motor-toys-server.vercel.app/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);

  return (
    <div className="my-16 md:mt-8 p-12 max-w-7xl mx-auto md:px-36 md:pb-12">
      {/* Modal */}
      <input type="checkbox" id="modal-form" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="modal-form">
            <BiWindowClose
              htmlFor="modal-form"
              className="text-red-700 w-6 h-8 cursor-pointer"
            ></BiWindowClose>
          </label>
          <h3 className="font-bold text-2xl mb-5 text-center">
            Update Toy Info
          </h3>
          <form
            onSubmit={handleUpdate}
            className="bg-[#E0F4DB] rounded-lg shadow-md p-6"
          >
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 font-bold">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Price"
                defaultValue={editToy.price}
                name="price"
                className="form-input mt-1 block w-full py-1 px-3 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-gray-700 font-bold"
              >
                Available Quantity
              </label>
              <input
                type="number"
                placeholder="Available Quantity"
                defaultValue={editToy.quantity}
                id="quantity"
                name="quantity"
                className="form-input mt-1 block w-full py-1 px-3 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold"
              >
                Detailed Description
              </label>
              <textarea
                id="description"
                defaultValue={editToy.description}
                name="description"
                placeholder="detailed description"
                className="form-textarea mt-1 block w-full py-1 px-3 rounded"
                rows="4"
              ></textarea>
            </div>
            <div className="modal-action">
              <button
                type="submit"
                htmlFor="modal-form"
                className="btn btn-sm text-xs border-none hover:text-gray-700 hover:bg-[#E0F4DB] bg-gray-700 text-white outline-0"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1 className="mb-10 text-3xl md:text-5xl text-center font-bold text-gray-900">
        My Toys
      </h1>
      <div className="flex mb-8 justify-center items-center bg-base-100">
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setSortBy("asc")}
            className="btn btn-sm text-xs border-none hover:text-gray-700 hover:bg-[#E0F4DB] bg-gray-700 text-white outline-0"
          >
            Sort by Asc
          </button>

          <button
            onClick={() => setSortBy("dsc")}
            className="btn-sm text-xs btn border-none hover:text-gray-700 hover:bg-[#E0F4DB] bg-gray-700 text-white outline-0"
          >
            Sort by Dsc
          </button>
        </div>
      </div>
      <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#E0F4DB]">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">
                Toy Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">
                Sub-Category
              </th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-800 uppercase tracking-wider">
                Available Quantity
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-800 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {toys &&
              toys.map((toy) => (
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
                    {toy.seller_name ? toy.seller_name : "N/A"}
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
                    <div className="flex justify-center items-center gap-3">
                      <label htmlFor="modal-form">
                        <BiEdit
                          onClick={() => setEditToy(toy)}
                          htmlFor="modal-form"
                          className="text-green-500 w-6 h-8 cursor-pointer"
                        ></BiEdit>
                      </label>
                      <button onClick={() => handleDelete(toy._id)}>
                        <BsFillTrash3Fill className="text-red-600 w-6 h-6"></BsFillTrash3Fill>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
