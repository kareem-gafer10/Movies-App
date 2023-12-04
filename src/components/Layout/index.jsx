import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { Suspense } from "react";
import Loading from "../Loading";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-100">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
