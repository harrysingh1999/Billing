import { Outlet } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      {/* <Outlet />
      <Signup /> */}
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
