import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import Header from "./header";
import Sidebar from "./sidebar/sidebar";
import { Spinner } from "./spinner";

export default function Layout() {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen">
      <Sidebar />
      <div className="flex-1 h-screen flex flex-col">
        <Header />
        <main className="min-h-0 overflow-auto">
          <React.Suspense fallback={<Spinner />}>{<Outlet />}</React.Suspense>
        </main>
      </div>
    </div>
  );
}
