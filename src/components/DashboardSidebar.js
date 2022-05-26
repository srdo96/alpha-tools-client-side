import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks.js/useAdmin";

import Loading from "./Loading/Loading";

const DashboardSidebar = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }
  return (
    <div className="drawer  drawer-mobile mt-16 ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  bg-accent">
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/profile">My Profile</NavLink>
          </li>

          {admin || (
            <>
              <li>
                <NavLink to="/dashboard/my-orders">My Orders</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/add-review">Add Review</NavLink>
              </li>
            </>
          )}

          {admin && (
            <>
              <li>
                <NavLink to="/dashboard/add-product">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-orders">Manage Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-products">
                  Manage Products
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
