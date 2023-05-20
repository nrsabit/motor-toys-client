import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const seller_name = form.sellerName.value;
    const seller_mail = form.sellerEmail.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const newToy = {
      name,
      seller_mail,
      seller_name,
      rating,
      price,
      quantity,
      description,
      category,
      photo,
    };
    form.reset();

    fetch("https://motor-toys-server.vercel.app/add-toy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Something is Wrong..! Please try again",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="mb-5 text-3xl md:text-5xl text-center font-bold text-gray-900">
        Add a Toy
      </h1>
      <form
        onSubmit={handleAddToy}
        className="rounded-lg shadow-md p-12 bg-[#E0F4DB] mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Toy Name"
              name="name"
              className="form-input mt-1 block w-full py-1 px-3 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block text-gray-700 font-bold"
            >
              Seller Name
            </label>
            <input
              defaultValue={user ? user.displayName : ""}
              type="text"
              id="sellerName"
              placeholder="Seller Name"
              name="sellerName"
              className="form-input mt-1 block w-full py-1 px-3 rounded"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-gray-700 font-bold"
            >
              Seller Email
            </label>
            <input
              type="email"
              defaultValue={user ? user.email : ""}
              id="sellerEmail"
              placeholder="Seller Email"
              name="sellerEmail"
              className="form-input mt-1 block w-full py-1 px-3 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-bold">
              Sub Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Sub Category"
              name="category"
              className="form-input mt-1 block w-full py-1 px-3 rounded"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700 font-bold">
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="Rating"
              className="form-input mt-1 block w-full py-1 px-3 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 font-bold">
              Available Quantity
            </label>
            <input
              type="number"
              placeholder="Available Quantity"
              id="quantity"
              name="quantity"
              className="form-input mt-1 block w-full py-1 px-3 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-bold">
              Price
            </label>
            <input
              type="number"
              placeholder="Price"
              id="price"
              name="price"
              className="form-input mt-1 block w-full py-1 px-3 rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 font-bold">
            Photo URL
          </label>
          <input
            id="photo"
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="form-textarea mt-1 block w-full py-1 px-3 rounded"
            rows="4"
            required
          ></input>
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
            name="description"
            placeholder="Detailed Description"
            className="form-textarea mt-1 block w-full py-1 px-3 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn  border-none hover:text-gray-700 hover:bg-[#E0F4DB] bg-gray-700 text-white outline-0"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToy;
