import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/Dashboard";
import { PetProvider } from "../providers/PetContext";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { ProfilePage } from "../pages/ProfilePage";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <PetProvider>
              <DashboardPage />
            </PetProvider>
          }
        />
      </Route>
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
