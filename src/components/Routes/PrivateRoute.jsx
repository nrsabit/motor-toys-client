import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation()
  if (loader) {
    return (
      <div className="min-h-screen max-w-7xl mx-auto flex justify-center items-center">
        <img src="https://i.ibb.co/GFy0712/loading.gif" alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
