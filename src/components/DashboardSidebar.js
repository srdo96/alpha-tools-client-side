import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  return (
    <div class="drawer drawer-mobile mt-16 ">
      <textarea id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col  bg-accent h-screen">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content h-screen">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-orders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-review">Add Review</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
