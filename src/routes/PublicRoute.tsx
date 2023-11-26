/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoute() {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return (
    isLoggedIn ? <Navigate to='/'/> : <Outlet/>
  )
}
