import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="bg-gray-500 h-screen flex justify-center ">
      <div className="bg-white relative p-4 rounded-md mt-20 h-80">
        <form
          method="post"
          className="flex flex-col justify-center items-center"
          action={"#"}
        >
          <h1 className="text-3xl m-3 font-bold text-center text-red-500">
            Login Page
          </h1>
          <div className="px-6 py-3">
            <label htmlFor="email"> Enter Your Email :</label>
            <input
              className="bg-amber-100 h-8 px-3 mx-4 rounded-md border-none outline-none"
              type="email"
              id="email"
              name="email"
            ></input>
          </div>
          <div className="ml-6 px-6 pt-1">
            <label htmlFor="password">Enter Your Password :</label>
            <input
              className="bg-amber-100 h-8 px-3 mx-4 rounded-md border-none outline-none"
              type="password"
              id="password"
              name="password"
                ></input>
          </div>
          <div className=" absolute flex bottom-6 left-1 px-6 py-3">
            <Link to={"/"} className="text-blue-500 underline mt-2">
              Forget Password ?
            </Link>
            <Link to={"/"} className="text-blue-500 underline ml-4 mt-2">
              Create Account
            </Link>
          </div>
          <button
            type="submit"
            className="bg-red-500 absolute bottom-19 w-40 cursor-pointer hover:bg-rose-700 hover:font-bold text-white p-1 rounded-md "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
