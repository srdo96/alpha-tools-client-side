import Purchase from "../pages/Purchase";

export const protectedRoutes = [
  { path: "/purchase/:id", name: "Purchase", Component: Purchase },
];
