import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function SideNavbar({ children }) {
  const menubar = [
    {
      path: "/",
      name: "Dashboard",
    },
    {
      path: "/order",
      name: "Order",
    },
    {
      path: "/download",
      name: "Downloads",
    },
    {
      path: "/addresses",
      name: "Addresses",
    },
    {
      path: "/accountDetails",
      name: "Account Details",
    },
    {
      path: "/booking",
      name: "Booking",
    },
    {
      path: "/logout",
      name: "Logout",
    },
  ];

  return (
    <div className="container flex flex-col md:flex-row mx-auto my-12 p-4 md:py-16 md:px-16 gap-3">
      <div className="sidebar md:w-1/3 ml-11">
        <div className="flex flex-col gap-4 ">
          {menubar.map((item, index) => {
            return (
              <NavLink
                className="bg-gray-100 py-2 px-4 border-b border-gray-300 h-12  font-semibold text-gray-700 hover:bg-gray-300 transition duration-300 flex items-center"
                to={item.path}
                key={index}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      <main className="w-full md:w-2/3 mx-4">{children}</main>
    </div>
  );
}

export default SideNavbar;
