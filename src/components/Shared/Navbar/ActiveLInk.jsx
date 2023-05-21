import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLInk = ({ to, children, customClass }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium ${customClass}`
          : `${customClass} text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
      }
    >{children}</NavLink>
  );
};

export default ActiveLInk;
