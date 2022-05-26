import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Footer from "./Footer";

const Navbar = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [checkEmailVerified, setCheckEmailVerified] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(pathname.includes("dashboard"));
  // if (loading) return <p>loading</p>;
  // if (user) {
  //   console.log(user.emailVerified);
  //   setCheckEmailVerified(user.emailVerified);
  // }

  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-blue-400 z-20 fixed top-0">
          {/* dashboard  nav icon */}
          {pathname.includes("dashboard") && (
            <label
              htmlFor="my-drawer-2"
              tabindex="0"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          )}
          <div className="flex-1 px-2 mx-2">Alpha Tools</div>
          <div className="flex-none block lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-3 uppercase font-semibold text-gray-300">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <NavLink to="/" className="rounded-lg">
                  Home
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/dashboard/profile" className="rounded-lg">
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/blogs" className="rounded-lg">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="rounded-lg">
                  My Portfolio
                </NavLink>
              </li>
              {user && (
                <li>
                  <p>{user.displayName}</p>
                </li>
              )}
              <li>
                {user ? (
                  <button
                    onClick={() => signOut(auth)}
                    className="btn btn-warning rounded-lg text-black"
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
        {pathname.includes("dashboard") || <Footer />}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/" className="rounded-lg">
              Home
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/dashboard/profile" className="rounded-lg">
                Dashboard
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/blogs" className="rounded-lg">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="rounded-lg">
              My Portfolio
            </NavLink>
          </li>
          {user && (
            <li>
              <p>{user.displayName}</p>
            </li>
          )}
          <li>
            {user ? (
              <button
                onClick={() => {
                  signOut(auth);
                  navigate("/");
                }}
                className="btn btn-warning rounded-lg text-black"
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
  );
};

export default Navbar;
