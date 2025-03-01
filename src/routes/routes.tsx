import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Orders from "../pages/Orders";
// import Dashboard from "../pages/Dashboard";
import { Home } from "../pages/Home";
import Analytics from "../pages/Analytics";
import Products from "../pages/Products";
import Shipments from "../pages/Shipments";
import Customers from "../pages/Customers";
import Settings from "../pages/Settings";
import ProtectedRoute from "./ProtectedRoutes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Dashboard from "../pages/Dashboard";

const Routers = () => {
  const {
    auth: { user },
  } = useSelector((state: RootState) => state);
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" replace /> : <Login />}
      />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="products" element={<Products />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routers;
