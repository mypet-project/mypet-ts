import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token = JSON.parse(localStorage.getItem("@mypet:token") as string);

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
