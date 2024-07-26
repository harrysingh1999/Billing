import React, { useState } from "react";

const EditItem = ({ onClose }) => {
  const [items, setItems] = useState([{ name: "", quantity: 0, price: 0, tax: 0, amount: 0 }]);

  const addItem = () => {
    setItems([...items, { name: "", quantity: 0, price: 0, tax: 0, amount: 0 }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...items];
    values[index][event.target.name] = event.target.value;
    setItems(values);
  };

  const handleDeleteItem = (index) => {
    const values = [...items];
    values.splice(index, 1);
    setItems(values);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-start justify-center z-50 ">
      <div className="bg-white w-3/5 p-4 mt-12 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Billed Item/s List</h2>
          <button onClick={onClose} className="text-red-500">Close</button>
        </div>
        <div className="grid grid-cols-6 gap-4 mt-4">
          <div className="font-semibold ml-9"></div>
          <div className="font-semibold">Item Name</div>
          <div className="font-semibold">Quantity</div>
          <div className="font-semibold">Price/Unit(₹)</div>
          <div className="font-semibold">Tax</div>
          <div className="font-semibold">Amount(₹)</div>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 mt-2 items-center"
          >
            <button
              onClick={() => handleDeleteItem(index)}
              className="px-4 py-2 rounded text-sm font-bold text-gray-500 hover:text-red-500"
            >
              Delete
            </button>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={(event) => handleInputChange(index, event)}
              className="border p-2 rounded col-span-1"
              placeholder="Item Name"
            />
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={(event) => handleInputChange(index, event)}
              className="border p-2 rounded"
              placeholder="Quantity"
            />
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={(event) => handleInputChange(index, event)}
              className="border p-2 rounded"
              placeholder="Price/Unit"
            />
            <input
              type="number"
              name="tax"
              value={item.tax}
              onChange={(event) => handleInputChange(index, event)}
              className="border p-2 rounded"
              placeholder="Tax"
            />
            <input
              type="number"
              name="amount"
              value={item.amount}
              onChange={(event) => handleInputChange(index, event)}
              className="border p-2 rounded"
              placeholder="Amount"
            />
          </div>
        ))}
        <div className="flex justify-between">
          <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Add Item
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
