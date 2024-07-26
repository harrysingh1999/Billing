import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center lg:pt-1 pb-8 md:pt-36 px-4">
      {/* <img src="path_to_your_logo.png" alt="Logo" className="mb-6 w-24 h-24" /> */}
      <div
        className="bg-white p-6 rounded-xl w-full max-w-sm text-blue-500"
        style={{
          boxShadow: `rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px`,
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Username"
              className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <NavLink
              to="/Forget"
              className="text-sm text-blue-500 hover:underline mt-2 block md:ml-48 font-bold"
            >
              Forgot Password?
            </NavLink>
          </div>
        </form>
        <div className="flex justify-between items-center mt-6 text-blue-500">
          <a
            href="#"
            className=" border border-blue-500 py-2 px-4 rounded hover:bg-[#791b1bfe] hover:text-white transition duration-300 font-bold"
          >
            Sign In
          </a>
          <NavLink
            to="/Signup"
            className=" border border-blue-500 py-2 px-4 rounded hover:bg-[#791b1bfe] hover:text-white transition duration-300 font-bold"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
