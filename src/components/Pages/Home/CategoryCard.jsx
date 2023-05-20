import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CategoryCard = ({ toy }) => {
  const navigate = useNavigate();
  const location = useLocation()
  const { user } = useContext(AuthContext);
  const { picture, name, price, rating, _id } = toy;
  const handleViewDetails = () => {
    if (user) {
        navigate(`/toys/:${_id}`)
    }else{
        Swal.fire({
            title: 'Warning',
            text: 'You Must Logged in to View Details',
            icon: 'warning',
            confirmButtonText: 'Okay'
          });
          navigate('/login', {state: location})
    }
  };
  console.log(location)
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <img src={picture} alt="Card 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700">Price: {price}</p>
        <p className="text-gray-700 mb-4">Ratting: {rating}</p>
        <button
          onClick={handleViewDetails}
          className="btn  border-none hover:text-gray-700 hover:bg-[#E0F4DB] bg-gray-700 text-white outline-0"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
