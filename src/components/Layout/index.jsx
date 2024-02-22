import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-100">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
