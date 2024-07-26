// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="col-span-9">
//       {/* <div className="w-1/5 text-black">
//         <button className="w-full text-center border-x-4 border-blue-500 border-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Dashboard
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Sale Invoice
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Quick Invoice
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Quotation
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Parties
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           <a href="/Mydetails" className="block w-full h-full">
//             My details
//           </a>
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Reports
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Sales Reports
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Quotation reports
//         </button>
//         <button className="w-full text-center border-blue-500 border-b-4 border-x-4 p-2 font-semibold text-2xl hover:bg-green-500">
//           Quick Invoice report
//         </button>
//       </div> */}
//       <div className="">
//         <div className="w-full h-full">
//           {/* <div className="bg-blue-500 h-[11%] text-white font-semibold flex items-center justify-center">
//             Hello ABCD!
//           </div> */}
//           <div className="p-2">
//             <div className="bg-blue-500 p-2 rounded-lg h-[20%] mt-1 text-2xl text-white font-medium">
//               Welcome
//             </div>
//           </div>
//           <div className="h-full flex">
//             <div className="h-full bg-white p-4">
//               <div className="h-full">
//                 <div className="bg-blue-500 p-4 rounded-2xl text-white font-medium text-2xl flex items-center justify-center">
//                   SALES
//                 </div>
//                 <div className="bg-blue-500 p-4 rounded-2xl text-white font-medium text-2xl flex items-center justify-center">
//                   QUOTATION
//                 </div>
//                 <div className="bg-blue-500 p-4 rounded-2xl text-white font-medium text-2xl flex items-center justify-center">
//                   TOTAL PARTIES
//                 </div>
//                 <div className="bg-blue-500 p-4 rounded-2xl text-white font-medium text-2xl flex items-center justify-center">
//                   EXPENSES
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-rows-1 gap-4 p-4 w-[40%]">
//               <div className="bg-blue-500 p-4 rounded-2xl">
//                 <div className="h-1/2 border-[2px] border-gray-400 rounded-2xl mb-2 text-lg text-white font-medium flex items-center justify-center">
//                   Company one
//                   <br /> Company name:
//                   <br /> GST number:
//                   <br /> Phone number:
//                 </div>
//                 <div className="h-1/2 border-[2px] border-gray-400 rounded-2xl text-lg text-white font-medium flex items-center justify-center">
//                   Company one
//                   <br /> Company name:
//                   <br /> GST number:
//                   <br /> Phone number:
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      {/* <div className="bg-blue-500 col-span-9 h-max py-2 text-white font-semibold flex items-center justify-center">
        Hello ABCD!
      </div> */}
      <div className="bg-white p-5 grid grid-cols-12 gap-5">
        <div className="col-span-12 bg-blue-500 p-2 rounded-lg h-max w-full mt-1 text-2xl text-white font-medium">
          Welcome
        </div>

        <div className="col-span-12 min-h-full grid grid-cols-12 gap-5">
          <div className="col-span-8 grid grid-cols-2 gap-5">
            <div className=" min-h-40 bg-blue-500 p-4 rounded-2xl text-white font-medium text-2xl flex items-center justify-center">
              SALES
            </div>

            <div className=" min-h-40 bg-blue-500 p-4 rounded-2xl text-white font-medium text-2xl flex items-center justify-center">
              QUOTATION
            </div>

            <div className=" min-h-40 bg-blue-500 p-4 rounded-2xl text-white font-medium text-2xl flex items-center justify-center">
              TOTAL PARTIES
            </div>

            <div className=" min-h-40 bg-blue-500 p-4 rounded-2xl text-white font-medium text-2xl flex items-center justify-center">
              EXPENSES
            </div>
          </div>

          <div className="col-span-4 h-full">
            <div className="bg-blue-500 p-4 rounded-2xl">
              <div className="h-[195px] border-[2px] border-gray-400 rounded-2xl mb-2 text-lg text-white font-medium flex items-center justify-center">
                Company one
                <br /> Company name:
                <br /> GST number:
                <br /> Phone number:
              </div>
              <div className="h-[195px] border-[2px] border-gray-400 rounded-2xl text-lg text-white font-medium flex items-center justify-center">
                Company one
                <br /> Company name:
                <br /> GST number:
                <br /> Phone number:
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
