// src/Signup.jsx
import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg" 
        style={{
          boxShadow: `rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px`,
        }}
      >
        <h2 className="text-3xl font-bold mb-7 text-center text-blue-500">
          Register
        </h2>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-semibold mb-1 text-start"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Enter company name"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-semibold mb-1 text-start"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-semibold mb-1 text-start"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="number"
            placeholder="Enter phone number"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-semibold mb-1 text-start"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter new password"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 font-semibold mb-1 text-start"
            htmlFor="confirmPassword"
          >
            Confirm New Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-[#791b1bfe]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
