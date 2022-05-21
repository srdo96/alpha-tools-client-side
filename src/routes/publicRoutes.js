import Blogs from "../pages/Blogs";
import Dashboard from "../pages/Dashboard";
import Banner from "../pages/Home/Banner";
import NotFound from "../pages/NotFound";

export const publicRoutes = [
  { path: "/", name: "Banner", Component: Banner },
  { path: "/home", name: "Banner", Component: Banner },
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "*", name: "NotFound", Component: NotFound },
];
