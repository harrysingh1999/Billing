import React, { useState } from "react";
import EditItem from "./EditItem";

const SaleInvoice = () => {
  const [sampleItemAdded, setSampleItemAdded] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleItem = () => {
    setSampleItemAdded(true);
  };

  const handleEditItems = () => {
    setShowEditPopup(true);
  };

  const closeEditPopup = () => {
    setShowEditPopup(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* <div className="w-1/5 text-black">
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 border-y-4 p-2 font-semibold text-2xl hover:bg-green-500">
          <a href="/Dashboard" className="block w-full h-full">
            Dashboard
          </a>
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Sale Invoice
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Quick Invoice
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          <a href="/Quotation" className="block w-full h-full">
            Quotation
          </a>
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Parties
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          <a href="/Mydetails" className="block w-full h-full">
            My Details
          </a>
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Reports
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Sales Reports
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Quotation reports
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Quick Invoice report
        </button>
      </div> */}
      <div className="w-full bg-gray-200">
        <div className="h-[75%]">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden px-4">
            <input
              type="text"
              placeholder="Enter Business Name"
              className="bg-transparent text-gray-500 text-xl font-semibold flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 focus:outline-none absolute right-0">
              Save
            </button>
          </div>
          <div className="p-4 h-full">
            <div className="bg-white p-2 rounded-lg h-auto w-full mt-1 text-2xl font-medium">
              <div className="grid grid-cols-2">
                <div className=" mt-4">
                  <div className="text-start text-xl px-3">
                    Enter details to make your first Sale
                  </div>
                  <div className="text-start text-base font-medium text-gray-500 px-3 mt-1">
                    First sale is made in less than a minute on ABCs
                  </div>
                  <div className="flex justify-between px-3 text-base mt-2 border-t">
                    <div className="text-xl mt-2">Invoice Details:</div>
                    <div className="text-xl pr-32 mt-2">Bill to:</div>
                  </div>
                  <div className="flex justify-between px-3 text-base mt-1">
                    <div className="text-gray-500 text-base">
                      Invoice Number:01
                    </div>
                    <div className="text-base pr-20 text-gray-500">
                      Customer Name
                    </div>
                  </div>
                  <div className="flex justify-between px-3 text-base mt-1">
                    <div className="text-gray-500 text-base">
                      Invoice Date : 23-07-2024
                    </div>
                    <div className="">
                      <input
                        type="text"
                        placeholder=""
                        className="w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  {!sampleItemAdded ? (
                    <button className="px-4 mt-3 w-full" onClick={handleItem}>
                      <div className="border border-dashed border-blue-500 rounded-lg text-center hover:bg-blue-300 hover:text-white text-blue-500 p-3 bg-blue-50 text-lg">
                        Add Sample Item
                      </div>
                    </button>
                  ) : (
                    <div className="border border-dashed border-blue-500 rounded-lg p-3 bg-blue-50 mt-3">
                      <div className="flex justify-between px-3">
                        <div className="text-lg">Sample Item</div>
                        <div className="text-lg">
                        <button
                            onClick={handleEditItems}
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-300 text-sm"
                          >
                            Edit Item/s
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 mt-2 px-3 text-sm">
                        <div>Quantity</div>
                        <div>Sub Total</div>
                        <div>Tax Amount</div>
                        <div>Total Amount</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 mt-2 px-3">
                        <div className="text-sm ml-4">10</div>
                        <div className="text-sm">₹10,000</div>
                        <div className="text-sm">₹1,000</div>
                        <div className="text-sm">₹11,000</div>
                      </div>
                    </div>
                  )}
                  <div className="text-semibold text-lg mt-2 px-3">
                    Invoice Calculation:
                  </div>
                  <div className="flex justify-between px-3 text-base mt-2">
                    <div className="text-gray-500">Invoice Amount</div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="₹ 0.00"
                        className="w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 px-3"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between px-3 text-base mt-3">
                    <div className="text-gray-500">Received</div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="₹ 0.00"
                        className="w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 px-3"
                      />
                    </div>
                  </div>
                  <div className="px-5 border-t mt-3">
                    <div className="flex justify-between px-6 text-lg font-normal bg-green-100 mt-5 p-2 rounded-md">
                      <div className="">Balance</div>
                      <div className="text-green-500">₹ 0.00</div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center mt-3 ">
                    <button className="bg-blue-500 rounded-2xl text-white font-semibold text-lg p-2 px-3 hover:bg-blue-300">
                      Create Your First Invoice
                    </button>
                  </div>
                </div>
                <div className="text-center bg-gray-100 w-full">
                  <div className="text-blue-500 font-semibold">Tax Invoice</div>
                  <div className="text-end text-xs px-6 mt-2">
                    <div className="text-base">
                      Paytel Financial Technologies Pvt Ltd
                    </div>
                    <div className="">GST Number:647747474HGFH77</div>
                    <div className="">Plot N0. 101, Aps homes</div>
                    <div className="">Sector 63, Noida,UP (110022)</div>
                    <div className="">+91-987-87-46833</div>
                    <div className="">payteltechnologies@gmail.com</div>
                  </div>
                  <div className="text-start text-xs px-6 mt-2">
                    <div className="text-base">Paytel Financial</div>
                    <div className="">Helpline : +91 93409 75647</div>
                    <div className="">payteltechnologies@gmail.com</div>
                  </div>
                  <div className="px-4 mt-2">
                    <div className="bg-gray-200 rounded-sm px-3 text-sm text-start">
                      <div className="">Invoice #10432</div>
                      <div className="">Invoice Date: 12/07/2024 </div>
                      <div className="">Due Date: 18/07/2024</div>
                    </div>
                  </div>
                  <div className="text-start text-xs px-6 mt-2">
                    <div className="text-base">Invoiced To</div>
                    <div className="">Paytel Terminal Pvt Ltd</div>
                    <div className="">ATTN: Arjun Vashisth</div>
                    <div className="">212, Okhla Estate , Phase 3</div>
                    <div className="">Delhi, Delhi, 110024</div>
                    <div className="">India</div>
                  </div>
                  <div className="p-4">
                    <div className="mb-4 text-sm">
                      <div className="flex justify-between">
                        <div className="text-xl text-start ml-24 mb-2">
                          Description
                        </div>
                        <div className="text-xl text-start ml-24 mb-2">
                          Total
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">
                          Vue JS + WHMCS One Step Checkout Orderform
                        </span>
                        <span>$199.00</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>
                          Promotional Code: SAVE30 - 30.00% One Time Discount
                        </span>
                        <span>-$59.70</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          Addon - Vue JS + WHMCS OPC Installation & Configure
                        </span>
                        <span>$69.00</span>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Sub-Total</span>
                        <span>$208.30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">18.00% IGST</span>
                        <span>$37.49</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Credit</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between">
                        <span className="font-medium text-lg">Total</span>
                        <span className="text-lg">$245.79</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showEditPopup && <EditItem onClose={closeEditPopup} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleInvoice;
