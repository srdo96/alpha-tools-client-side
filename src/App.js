import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <Navbar>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </Navbar>
  );
}

export default App;
