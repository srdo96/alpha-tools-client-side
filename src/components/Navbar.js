import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar bg-base-300 fixed top-0">
          <div class="flex-1 px-2 mx-2">Power</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal gap-3">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <NavLink to="/" className="rounded-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className="rounded-lg">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="rounded-lg">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="rounded-lg">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/" className="rounded-lg">
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
