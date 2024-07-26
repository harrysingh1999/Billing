import React from "react";
import { FaRupeeSign } from "react-icons/fa";

export default function QuickInvoice() {
  for (let i = 1; i <= 5; i++) {
    // for (let j = 0; j < 5; j++) {
    //   console.log(i, j);
    // }
    console.log(i);
  }

  return (
    <div className="grid grid-flow-col grid-cols-12 mt-1">
      <div className="flex flex-col col-span-8 mx-2">
        <div className="border border-black/40 rounded-sm">
          <input
            type="text"
            placeholder="Press f1 to scan or search by item code, model no or item name"
            className="border w-full border-black/40 rounded-sm ps-2 py-2 text-xs"
          />
          <div className="flex justify-around text-sm">
            <span className="h-[75vh] pr-4 border-r border-black/30">#</span>
            <span className="h-[75vh] pr-4 border-r border-black/30">
              ITEM CODE
            </span>
            <span className="h-[75vh] pr-4 border-r border-black/30">
              ITEM NAME
            </span>
            <span className="h-[75vh] pr-4 border-r border-black/30">QTY</span>
            <span className="h-[75vh] pr-4 border-r border-black/30">UNIT</span>
            <span className="h-[75vh] pr-4 border-r border-black/30">
              PRICE/UNIT(₹)
            </span>
            <span className="h-[75vh] pr-4 border-r border-black/30">
              DISCOUNT(₹)
            </span>
            <span className="h-[75vh] pr-4 border-r border-black/30">
              TAX APPLIED(₹)
            </span>
            <span className="">TOTAL(₹)</span>
          </div>
        </div>
        <div className="border border-black/40 rounded-sm flex flex-wrap justify-around mt-1 py-2">
          <button className="border border-black/40 rounded-sm py-2 bg-blue-300 text-sm px-8">
            Change Quantity [F2]
          </button>
          <button className="border border-black/40 rounded-sm py-2 bg-blue-300 text-sm px-8">
            Item Discount [F3]
          </button>
          <button className="border border-black/40 rounded-sm py-2 bg-blue-300 text-sm px-8">
            Remove Item [F4]
          </button>
          <button className="border border-black/40 rounded-sm py-2 bg-blue-300 text-sm px-8">
            Bill Tax [F7]
          </button>
          <button className="border border-blue-300 rounded-sm py-2  text-sm px-8 mt-2">
            Additional Charges [F8]
          </button>
          <button className="border border-blue-300 rounded-sm py-2  text-sm px-8 mt-2 ">
            Bill Discount [F9]
          </button>
          <button className="border border-blue-300 bg-gray-400 text-white rounded-sm py-2  text-sm px-8 mt-2 ">
            Loyalty Points [F10]
          </button>
          <button className="border border-blue-300 rounded-sm py-2  text-sm px-8 mt-2 ">
            Remarks [F12]
          </button>
        </div>
      </div>
      <div className="col-span-4">
        <div className="border border-black/40 rounded-sm">
          <h1 className="font-semibold text-lg ps-2 mb-2">Customer Details</h1>
          <input
            type="text"
            placeholder="Press F11 to search for a customer by name, phone number"
            className="border mx-2 mb-2 border-black/40 rounded-sm ps-2 py-2 text-xs w-[94%]"
          />
        </div>
        <div className="border border-black/40 rounded-sm mt-1 py-2 px-2">
          <h2 className="font-semibold text-lg">Bill Details</h2>
          <div className="flex justify-between border-b border-black/40 pb-4">
            <p>Sub Total:</p>
            <p>₹ 0.00</p>
          </div>
          <div className="flex justify-between pb-24 mt-4">
            <p>Total Amount (Items: 0 , Quantity: 0 )</p>
            <p>₹ 0.00</p>
          </div>
        </div>
        <div className="border border-black/40 rounded-sm mt-1 py-2 px-2">
          <h2 className="font-semibold text-lg">Cash/UPI</h2>
          <div className="flex justify-between my-4">
            <p>Payment Mode:</p>
            <select
              name=""
              id=""
              className="border border-black/40 rounded-sm py-1 px-2 w-40"
            >
              <option value="">Cash</option>
            </select>
          </div>
          <div className="flex justify-between ">
            <p>Amount Received:</p>
            <div className="flex items-center border border-black/40 rounded-sm ps-1">
              <FaRupeeSign />

              <input type="text" className="py-1 px-2 w-40 outline-none" />
            </div>
          </div>
          <div className="flex justify-between pb-4 mt-4">
            <p>Change to Return:</p>
            <p>₹ 0.00</p>
          </div>
          <button className="w-full border border-black/40 rounded-sm py-1 bg-blue-300 text-sm">
            Save & Print Bill [Ctrl+P]
          </button>
          <div className="flex justify-between mt-4">
            <button className="border border-black/40 rounded-sm py-1 bg-blue-300 w-[40%] text-sm">
              Partial Pay [Ctrl+B]
            </button>
            <button className="border border-black/40 rounded-sm py-1 bg-blue-300 w-[40%] text-sm">
              Multi Pay [Ctrl+M]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
