/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  return !isLoggedIn ? <Navigate to="/login" /> : <Outlet />;
}
