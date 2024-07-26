import React, { useState } from "react";

const Quotation = () => {
  const [rows, setRows] = useState([
    { item: "", qty: 0, unit: "none", price: 0, tax: "none", amount: 0 },
    { item: "", qty: 0, unit: "none", price: 0, tax: "none", amount: 0 },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { item: "", qty: 0, unit: "none", price: 0, tax: "none", amount: 0 },
    ]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(newRows);
  };

  return (
    <div className="p-4">
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold mb-10">Estimate/Quotation</h2>
          <div className="">
            <div className="flex items-center space-x-2 font-semibold">
              <span>Ref No.:</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-1"
                defaultValue="1"
              />
            </div>
            <div className="flex items-center space-x-2 mt-4 font-semibold">
              <span>Invoice Date:</span>
              <input
                type="date"
                className="border border-gray-300 rounded p-1"
                defaultValue="2024-07-25"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-xl font-semibold">Party</label>
          <select className="border border-gray-300 rounded p-2 w-[15%]">
            <option value="">Select</option>
            <option value="">Select</option>
          </select>
        </div>

        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2"></th>
              <th className="border border-gray-300 p-2">ITEM</th>
              <th className="border border-gray-300 p-2">QTY</th>
              <th className="border border-gray-300 p-2">UNIT</th>
              <th className="border border-gray-300 p-2">PRICE/UNIT</th>
              <th className="border border-gray-300 p-2">TAX</th>
              <th className="border border-gray-300 p-2">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2 text-center relative group">
                  {index + 1}
                  <button
                    className="absolute top-0 left-0 w-full h-full bg-red-500 text-white opacity-0 group-hover:opacity-100"
                    onClick={() => deleteRow(index)}
                  >
                    Delete
                  </button>
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="border border-gray-300 rounded p-1 w-full"
                    value={row.item}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].item = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    className="border border-gray-300 rounded p-1 w-full"
                    value={row.qty}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].qty = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <select
                    className="border border-gray-300 rounded p-1 w-full"
                    value={row.unit}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].unit = e.target.value;
                      setRows(newRows);
                    }}
                  >
                    <option value="none">1</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    className="border border-gray-300 rounded p-1 w-full"
                    value={row.price}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].price = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <select
                    className="border border-gray-300 rounded p-1 w-full"
                    value={row.tax}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].tax = e.target.value;
                      setRows(newRows);
                    }}
                  >
                    <option value="none">Select</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2 text-right">
                  {row.qty * row.price}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="border border-gray-300 p-2 text-center">
                <button className="text-blue-500" onClick={addRow}>
                  ADD ROW
                </button>
              </td>
              <td className="border border-gray-300 p-2" colSpan="1" />
              <td className="border border-gray-300 p-2 text-right">Total</td>
              <td className="border border-gray-300 p-2 text-right"></td>
              <td className="border border-gray-300 p-2 text-right"></td>
              <td className="border border-gray-300 p-2 text-right"></td>
              <td className="border border-gray-300 p-2 text-right"></td>
            </tr>
          </tfoot>
        </table>

        <div className="flex justify-end items-center mt-4">
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Round Off</span>
            </label>
            <input
              type="number"
              className="border border-gray-300 rounded p-1 w-16"
              defaultValue="0"
            />
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <span>Total</span>
            <input
              type="number"
              className="border border-gray-300 rounded p-1 w-24"
              defaultValue="0"
              // readOnly
            />
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-10 space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Share
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
