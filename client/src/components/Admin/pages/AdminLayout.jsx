import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AdminLayout() {
  return (
    <div className="">
      <Sidebar />

      <div className="lg:ml-24 mx-5 mt-3 ml-[100px]">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
