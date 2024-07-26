import React, { useState } from "react";
import { FaToggleOff } from "react-icons/fa6";

export default function AddParty() {
  const [clickedText, setClickedText] = useState("GST");

  return (
    <>
      {/* <div className="bg-blue-500 w-full text-white font-semibold flex items-center justify-center">
        Hello ABCD!
      </div> */}
      <div className="px-10 mt-4">
        <div className="flex justify-between  border-b border-black/30 py-3 mb-8">
          <p className="font-bold">Add Party</p>
          <div className="">
            <span className="mx-4">⚙</span>
            <span>✖</span>
          </div>
        </div>

        <form action="" className="">
          <input
            type="text"
            placeholder="Party Name *"
            className="focus:ring-1 focus:outline-none ps-2 py-1 border border-black rounded-md"
          />
          <input
            type="text"
            placeholder="GSTIN"
            className="focus:ring-1 mx-8 focus:outline-none ps-2 py-1 border border-black rounded-md"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="focus:ring-1 focus:outline-none ps-2 py-1 border border-black rounded-md"
          />
        </form>
        <div className="flex border-b border-black mt-12 ">
          <button
            className={`${
              clickedText === "GST" ? "border-b-4 border-blue-600 pb-3" : "pb-3"
            }`}
            onClick={() => setClickedText("GST")}
          >
            GST & Address
          </button>
          <button
            className={`${
              clickedText === "Credit"
                ? "border-b-4 border-blue-600 pb-3 mx-8"
                : "pb-3 mx-8"
            }`}
            onClick={() => setClickedText("Credit")}
          >
            Credit & Balance
          </button>
          <button
            className={`${
              clickedText === "Additional"
                ? "border-b-4 border-blue-600 pb-3"
                : "pb-3"
            }`}
            onClick={() => setClickedText("Additional")}
          >
            Additional Fields
          </button>
        </div>
        {clickedText === "GST" && (
          <div className="flex mt-6">
            <div className="flex flex-col border-r border-black/30 pr-6 mr-6">
              <label htmlFor="">
                GST Type
                <select
                  name=""
                  id=""
                  className="border border-black rounded-md ms-4 px-4 py-1"
                >
                  <option value="">Unregistered/Consumer</option>
                  <option value="">Registered Business - Regular</option>
                  <option value="">Registered Business - Composition</option>
                </select>
              </label>
              <label htmlFor="">
                State
                <select
                  name=""
                  id=""
                  className="border ms-4 my-4 border-black rounded-md px-4 py-1"
                >
                  <option value="">Andaman & Nicobar Islands</option>
                  <option value="">Andhra Pradesh</option>
                  <option value="">Arunachal Pradesh</option>
                  <option value="">Assam</option>
                  <option value="">Bihar</option>
                  <option value="">Chandigarh</option>
                  <option value="">Chattisgarh</option>
                  <option value="">Dadra & Nagar Haveli & Daman & Diu</option>
                  <option value="">Daman & Diu</option>
                  <option value="">Delhi</option>
                  <option value="">Goa</option>
                  <option value="">Gujarat</option>
                  <option value="">Haryana</option>
                  <option value="">Himachal Pradesh</option>
                </select>
              </label>
              <input
                type="text"
                placeholder="Email Id"
                className="border border-black ps-2 py-1 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                rows={4}
                placeholder="Billing Address"
                className="border border-black ps-2 pt-2 rounded-md"
              ></textarea>
              <button className="text-blue-600">
                + Enable Shipping Address
              </button>
            </div>
          </div>
        )}
        {clickedText === "Credit" && (
          <div className="mt-6">
            <input
              className="border border-black/80 rounded-md ps-2 py-1"
              type="text"
              placeholder="Opening Balance"
            />
            <input
              className="border border-black/80 rounded-md ps-2 py-1 ms-4"
              type="date"
            />

            <div className="mt-4">
              <p>Credit Limit</p>
              <div className="flex items-center mt-2">
                <span>No Limit</span>
                <span className=" mx-2">
                  <FaToggleOff className="text-blue-600 text-3xl" />
                </span>
                <span>Custom Limit</span>
              </div>
            </div>
          </div>
        )}
        {clickedText === "Additional" && (
          <div className="mt-6">
            <p className="">
              <input type="checkbox" className="scale-125 mr-4" />
              <input
                type="text"
                placeholder="Additional field 1 Name"
                className="border border-black/70 rounded-md py-1 ps-2"
              />
            </p>
            <p className="my-4">
              <input type="checkbox" className="scale-125 mr-4" />
              <input
                type="text"
                placeholder="Additional field 2 Name"
                className="border border-black/70 rounded-md py-1 ps-2"
              />
            </p>
            <p className="mb-4">
              <input type="checkbox" className="scale-125 mr-4" />
              <input
                type="text"
                placeholder="Additional field 3 Name"
                className="border border-black/70 rounded-md py-1 ps-2"
              />
            </p>
            <p className="">
              <input type="checkbox" className="scale-125 mr-4" />
              <input
                type="text"
                placeholder="Additional field 4 Name"
                className="border border-black/70 rounded-s-md py-1 ps-2"
              />
              <select name="" id="" className="border border-black/70 py-1 rounded-r-md"> 
                <option value="">dd/mm/yy</option>
                <option value="">mm/yy</option>
              </select>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
