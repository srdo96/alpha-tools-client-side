import Blogs from "../pages/Blogs";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "Signup", Component: Signup },
  { path: "*", name: "NotFound", Component: NotFound },
];
