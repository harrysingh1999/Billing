import React from "react";

export default function ChangePassword({ setNewPassword }) {
  return (
    <div className="w-full h-full flex justify-center items-center absolute bg-black/60">
      <div className="border border-red-500 rounded-lg relative w-[30%] bg-white z-10">
        <h1 className="text-2xl font-semibold mt-8 text-center text-blue-500">
          Change Password
        </h1>
        <div className="flex flex-col items-center mt-7">
          <form className="flex flex-col w-full px-8">  
            <input
              type="password"
              placeholder="Enter Current Password"
              className="bg-transparent p-1 focus:ring-1 focus:outline-none border border-black mb-4 w-full rounded-md"
            />
            <input
              type="password"
              placeholder="Enter New Password"
              className="bg-transparent p-1 focus:ring-1 focus:outline-none border border-black mb-4 w-ful rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="bg-transparent p-1 focus:ring-1 focus:outline-none border border-black mb-4 w-full rounded-md"
            />
            <div className="flex justify-center my-6">
              <button
                className="bg-blue-400 text-white border border-black px-4 py-1 rounded-md hover:bg-green-500"
                onClick={() => setNewPassword(false)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
