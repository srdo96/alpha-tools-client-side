import Dashboard from "../pages/Dashboard/Dashboard";
import Purchase from "../pages/Purchase";

export const protectedRoutes = [
  { path: "/purchase/:id", name: "Purchase", Component: Purchase },
  //   { path: "/dashboard", name: "Dashboard", Component: Dashboard },
];
