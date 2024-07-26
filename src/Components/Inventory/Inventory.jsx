import React, { useState } from "react";

const Inventory = () => {
  const [rows, setRows] = useState([
    {
      product: "cream",
      sku: "No SKU",
      unavailable: "none",
      committed: 0,
      available: "none",
      onhand: "none",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        product: "",
        sku: "",
        unavailable: "",
        committed: "",
        available: "",
        onhand: "",
      },
    ]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(newRows);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="text-2xl font-semibold px-5">Inventory:-</div>
      <div className="p-4 bg-gray-400 h-auto w-full mt-3 rounded-md">
        <div className="flex justify-between">
          <div className="text-xl text-white font-semibold">Inventory</div>
          <div className="flex gap-4">
            <button className="border border-gray-300 bg-blue-300 px-3 py-1 rounded-md hover:bg-blue-500">
              Export
            </button>
            <button className="border border-gray-300 bg-blue-300 px-3 py-1 rounded-md hover:bg-blue-500">
              Import
            </button>
          </div>
        </div>
        <div className="p-3 bg-white mt-4 rounded-xl">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <button
                className="border border-gray-300 bg-blue-300 px-3 py-1 rounded-md hover:bg-blue-500"
                onClick={addRow}
              >
                Add
              </button>
              <button className="font-bold text-xl">+</button>
            </div>
            <div className="flex gap-4">
              <div>🔎</div>
              <div>🔃</div>
            </div>
          </div>
          <table className="w-full border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-100 justify-start">
                <th></th>
                <th className="font-semibold">
                  <input type="checkbox" />
                </th>
                <th className="font-semibold">Product</th>
                <th className="font-semibold">SKU</th>
                <th className="font-semibold">Unavailable</th>
                <th className="font-semibold">Committed</th>
                <th className="font-semibold">Available</th>
                <th className="font-semibold">On hand</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2 text-center">
                    <button
                      className="text-red-500 hover:font-bold"
                      onClick={() => deleteRow(index)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="border border-gray-300 rounded p-1 w-full"
                      value={row.product}
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[index].product = e.target.value;
                        setRows(newRows);
                      }}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="border border-gray-300 rounded p-1 w-full"
                      value={row.sku}
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[index].sku = e.target.value;
                        setRows(newRows);
                      }}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="border border-gray-300 rounded p-1 w-full"
                      value={row.unavailable}
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[index].unavailable = e.target.value;
                        setRows(newRows);
                      }}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      className="border border-gray-300 rounded p-1 w-full"
                      value={row.committed}
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[index].committed = e.target.value;
                        setRows(newRows);
                      }}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      className="border border-gray-300 rounded p-1 w-full"
                      value={row.available}
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[index].available = e.target.value;
                        setRows(newRows);
                      }}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      className="border border-gray-300 rounded p-1 w-full"
                      value={row.onhand}
                      onChange={(e) => {
                        const newRows = [...rows];
                        newRows[index].onhand = e.target.value;
                        setRows(newRows);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  className="border border-gray-300 p-2 text-center"
                  colSpan="8"
                >
                  <button className="text-blue-500" onClick={addRow}>
                    ADD ROW
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
