/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import Nav from "../nav/Nav";

export default function Wrapper() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, []);
  return (
    <div>
      <Nav/>
      <SideNav />
      <Outlet />
    </div>
  );
}
