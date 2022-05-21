import { Route, Routes } from "react-router-dom";
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
    </Navbar>
  );
}

export default App;
