import React from "react";
import { Link, NavLink } from "react-router";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b-2 border-gray-300">
      <Link to={"/About"}>
        <span className="text-2xl font-semibold ">
          Your <span className="text-red-500">logo</span>
        </span>
      </Link>
      <ul className="flex space-x-10 font-medium ">
        <li>
          <NavLink
            className={({ isActive }) =>
              `cursor-pointer hover:bg-transparent hover:text-orange-700  ${
                isActive ? "text-red-500" : ""
              }`
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `cursor-pointer hover:bg-transparent hover:text-orange-700  ${
                isActive ? "text-red-500" : ""
              }`
            }
            to={"/About"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `cursor-pointer hover:bg-transparent hover:text-orange-700  ${
                isActive ? "text-red-500" : ""
              }`
            }
            to={"/Contact"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `cursor-pointer hover:bg-transparent hover:text-orange-700  ${
                isActive ? "text-red-500" : ""
              }`
            }
            to={"/github"}
          >
          GitHub
          </NavLink>
        </li>

      </ul>
      <span>
        <Link to={"/login"}>
          <button className=" font-semibold cursor-pointer px-3 py-1 rounded-md">
            Login
          </button>
        </Link>
        <Link to={"#"}>
          <button className="bg-red-600 font-semibold cursor-pointer text-white px-3 py-1 mx-3 rounded-md">
            Get Started
          </button>
        </Link>
      </span>
    </div>
  );
};

export default Nav;
