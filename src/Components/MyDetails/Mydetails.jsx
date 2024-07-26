import React, { useState } from "react";
import AddCompany from "./AddCompany";

const Mydetails = () => {
  const [newCompany, setNewCompany] = useState(false);

  const handleCompany = () => {
    setNewCompany(true);
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
          Quotation
        </button>
        <a
          href="/AddParty"
          className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500"
        >
          Parties
        </a>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          My details
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
      <div className="w-full">
        <div className="grid-row-2 h-[80%]">
          {/* <div className="bg-blue-500 h-[11%] text-white font-semibold flex items-center justify-center">
            Hello ABCD!
          </div> */}
          <div className="flex bg-blue-500 mt-2 ml-2 rounded-lg h-[12%] justify-between px-10">
            <div className="text-2xl text-white font-medium mt-3">
              My Company details
            </div>
            <button
              className=" border-[2px] bg-red-500 hover:bg-green-500 px-5 text-white text-md font-semibold h-[32px] mt-3 rounded-md"
              onClick={handleCompany}
            >
              + add new company
            </button>
          </div>
          {newCompany && <AddCompany setNewCompany={setNewCompany} />}
          <div className="w-full h-full flex">
            <div className="w-2/3 h-full bg-white p-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-blue-500 p-4 rounded-2xl text-white font-medium text-lg flex items-center justify-center">
                  <ol className="list-decimal text-start">
                    <li className="">
                      Company Name:
                      <br /> ABCD pvt ltd
                    </li>
                    <li>
                      GST Number:
                      <br /> DHFVJ8864378GF
                    </li>
                    <li>
                      Address:
                      <br /> BSI park, 1st floor
                    </li>
                    <li>
                      Mobile Number:
                      <br /> 7474747474
                    </li>
                    <li>PAN Number</li>
                    <li>Bank Name</li>
                    <li>Account Number</li>
                    <li>IFSC</li>
                  </ol>
                </div>
                <div className="bg-blue-500 p-4 rounded-2xl text-white font-medium text-lg flex items-center justify-center">
                  <ol className="list-decimal text-start">
                    <li className="">
                      Company Name:
                      <br /> ABCD pvt ltd
                    </li>
                    <li>
                      GST Number:
                      <br /> DHFVJ8864378GF
                    </li>
                    <li>
                      Address:
                      <br /> BSI park, 1st floor
                    </li>
                    <li>
                      Mobile Number:
                      <br /> 7474747474
                    </li>
                    <li>PAN Number</li>
                    <li>Bank Name</li>
                    <li>Account Number</li>
                    <li>IFSC</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mydetails;
