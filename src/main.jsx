import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./Components/Login/Login.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Forget from "./Components/Login/Forget.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Mydetails from "./Components/MyDetails/Mydetails.jsx";
import AddCompany from "./Components/MyDetails/AddCompany.jsx";
import AddParty from "./Components/Party/AddParty.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import SaleInvoice from "./Components/SaleInvoice/SaleInvoice.jsx";
import EditItem from "./Components/SaleInvoice/EditItem.jsx";
import QuickInvoice from "./Components/QuickInvoice/QuickInvoice.jsx";
import Quotation from "./Components/Quotation/Quotation.jsx";
import ChangePassword from "./Components/Login/ChangePassword.jsx";
import Inventory from "./Components/Inventory/Inventory.jsx";
import Signup from "./Components/Signup/Signup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Login" element={<Login />} />
      <Route path="Forget" element={<Forget />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Mydetails" element={<Mydetails />} />
      <Route path="AddCompany" element={<AddCompany />} />
      <Route path="AddParty" element={<AddParty />} />
      <Route path="Sidebar" element={<Sidebar />} />
      <Route path="SaleInvoice" element={<SaleInvoice />} />
      <Route path="EditItem" element={<EditItem />} />
      <Route path="QuickInvoice" element={<QuickInvoice />} />
      <Route path="Quotation" element={<Quotation />} />
      <Route path="ChangePassword" element={<ChangePassword />} />
      <Route path="Inventory" element={<Inventory />} />
      <Route path="Signup" element={<Signup />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
