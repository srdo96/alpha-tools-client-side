import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import { protectedRoutes } from "./routes/protectedRoutes";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <Navbar>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          {protectedRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          {/* Dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="add-review" element={<AddReview />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </Navbar>
  );
}

export default App;
