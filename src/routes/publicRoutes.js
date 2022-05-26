import Blogs from "../pages/Blogs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MyPortfolio from "../pages/MyPortfolio";
import NotFound from "../pages/NotFound";
import ResetPass from "../pages/ResetPass";
import Signup from "../pages/Signup";

export const publicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/portfolio", name: "MyPortfolio", Component: MyPortfolio },
  { path: "/login", name: "Login", Component: Login },
  { path: "/signup", name: "Signup", Component: Signup },
  { path: "/reset", name: "Signup", Component: ResetPass },
  { path: "*", name: "NotFound", Component: NotFound },
];
