import React from "react";

const Forget = () => {
  return (
    <div className="min-h-screen flex items-center justify-center lg:pt-1 md:pt-28 px-4 pb-8">
      <div
        className="bg-white p-6 rounded-xl w-full max-w-sm text-blue-500"
        style={{
          boxShadow: `rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px`,
        }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Forgot Password
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline mt-2 block ml-44 md:ml-64"
            >
              Get OTP
            </a>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="New Password"
              className="mt-1 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full  bg-blue-500 text-white py-2 px-4 rounded hover:bg-[#791b1bfe] focus:outline-none focus:ring-2 focus:ring-red-500 mx-auto">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forget;
