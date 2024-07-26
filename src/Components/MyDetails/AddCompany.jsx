import React from "react";

export default function AddCompany({ setNewCompany }) {
  return (
    <div className="h-[80%] w-[83%] flex justify-center items-center absolute bg-black/60">
      <div className="border border-red-500 rounded-lg relative w-[50%] bg-red-200 z-10">
        <h1 className="text-2xl font-semibold mt-8 text-center">
          Add new Company
        </h1>
        <p className="text-center">
          {" "}
          To onboard a company, fill the below details:
        </p>
        <div className="flex justify-around mt-4">
          <div className="flex flex-col justify-around">
            <p>1. Company Name:</p>
            <p>2. GST Number:</p>
            <p>3. Address:</p>
            <p>4. Mobile Number:</p>
            <p>5. PAN Number:</p>
            <p>6. Bank Name:</p>
            <p>7. Account Number:</p>
            <p>8. IFSC Code:</p>
          </div>
          <form className="flex flex-col">
            <input
              type="text"
              className="bg-transparent px-2 focus:ring-1 focus:outline-none border border-black mb-1"
            />
            <input
              type="text"
              className="bg-transparent px-2 focus:ring-1 focus:outline-none border border-black mb-1"
            />
            <input
              type="text"
              className="bg-transparent px-2 focus:ring-1 focus:outline-none border border-black mb-1"
            />
            <input
              type="text"
              className="bg-transparent px-2 focus:ring-1 focus:outline-none border border-black mb-1"
            />
            <input
              type="text"
              className="bg-transparent px-2 focus:ring-1 focus:outline-none border border-black mb-1"
            />
            <input
              type="text"
              className="bg-transparent px-2 focus:ring-1 focus:outline-none border border-black mb-1"
            />
            <input
              type="text"
              className="bg-transparent px-2 focus:ring-1 focus:outline-none border border-black mb-1"
            />
            <input
              type="text"
              className="bg-transparent px-2 focus:ring-1 focus:outline-none border border-black mb-1"
            />
          </form>
        </div>
        <div className="flex justify-around my-6">
          <button className="bg-blue-400 text-white border border-black px-4 py-1 rounded-md">
            Submit
          </button>
          <button
            className="bg-blue-400 text-white border border-black px-4 py-1 rounded-md"
            onClick={() => setNewCompany(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
