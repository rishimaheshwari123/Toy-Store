import { Outlet } from "react-router-dom";

import Navbar from "../components/pure-frontend/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
