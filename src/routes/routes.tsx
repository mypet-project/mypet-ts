import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { ProtectRoutes } from "../components/ProtectedRoutes/ProtectedRoutes";
import { DashboardPage } from "../pages/Dashboard";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />}></Route>
    </Routes>
  );
}
