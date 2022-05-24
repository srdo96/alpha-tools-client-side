import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [checkEmailVerified, setCheckEmailVerified] = useState(true);
  // if (loading) return <p>loading</p>;
  // if (user) {
  //   console.log(user.emailVerified);
  //   setCheckEmailVerified(user.emailVerified);
  // }

  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar bg-black z-10 fixed top-0">
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
            <ul class="menu menu-horizontal gap-3 uppercase font-semibold text-gray-300">
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
              {user && (
                <li>
                  <p>{user?.displayName}</p>
                </li>
              )}
              <li>
                {user ? (
                  <button
                    onClick={() => signOut(auth)}
                    class="btn btn-warning rounded-lg text-black"
                  >
                    Log Out
                  </button>
                ) : (
                  <NavLink to="/login" className="rounded-lg">
                    Login
                  </NavLink>
                )}
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
