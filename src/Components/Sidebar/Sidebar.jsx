import React, { useState } from "react";
import { sidebarDetails } from "../../Utils/Constant";
import Dashboard from "../Dashboard/Dashboard";
import AddParty from "../Party/AddParty";
import Mydetails from "../MyDetails/Mydetails";
import SaleInvoice from "../SaleInvoice/SaleInvoice";
import { NavLink, useNavigate } from "react-router-dom";
import Quotation from "../Quotation/Quotation";
import Inventory from "../Inventory/Inventory";

export default function Sidebar() {
  const [mainContent, setMainContent] = useState("Dashboard");
  const navigate = useNavigate();

  const handleClick = (content) => {
    content === "Quick Invoice"
      ? navigate("/QuickInvoice")
      : setMainContent(content);
  };

  return (
    <>
      {/* <div className="w-1/5 text-black">
        <button className="w-full text-center border-x-4 border-blue-500 border-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Dashboard
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
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          Parties
        </button>
        <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
          <a href="/Mydetails" className="block w-full h-full">
            My details
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
      <div className="grid grid-flow-col grid-cols-12">
        <div className="flex flex-col col-span-2">
          {sidebarDetails.map((item) => {
            return (
              <button
                key={item.name}
                onClick={() => handleClick(item.name)}
                className="text-center border-x-4 border-blue-500 border-4 p-2 font-semibold text-xl hover:bg-green-500"
              >
                {" "}
                {item.name}{" "}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col col-span-10">
          <div className="bg-blue-500 text-white font-semibold flex items-center justify-around py-3">
            <span> Hello ABCD!</span>
            <NavLink to="/ChangePassword">
              <button className=" border-[2px] bg-red-500 hover:bg-green-500 px-5 text-white text-md font-semibold h-[32px] rounded-md">
                Change Password
              </button>
            </NavLink>
          </div>
          <div className="">
            {" "}
            {mainContent === "Dashboard" && <Dashboard />}
            {mainContent === "Parties" && <AddParty />}
            {mainContent === "My details" && <Mydetails />}
            {mainContent === "Sale Invoice" && <SaleInvoice />}
            {mainContent === "Quotation" && <Quotation />}
            {mainContent === "Inventory" && <Inventory />}
          </div>
        </div>
      </div>
    </>
  );
}
