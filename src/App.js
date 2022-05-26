import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./Authentication/AdminRoute";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/Dashboard/AddProduct";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import Payment from "./pages/Dashboard/Payment";
import Purchase from "./pages/Purchase";
import { protectedRoutes } from "./routes/protectedRoutes";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <Navbar>
      <Toaster />
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* public routes end */}

        {/* Protected Routes */}
        <Route
          path="purchase/:id"
          element={
            <ProtectedRoute>
              <Purchase />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="payment/:id"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        {/* Dashboard routes */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<MyProfile />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-review" element={<AddReview />} />

          <Route
            path="add-product"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route
            path="users"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="manage-orders"
            element={
              <AdminRoute>
                <ManageOrders />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
