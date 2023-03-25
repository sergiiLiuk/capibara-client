import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { useAppRoutes } from "../routing/router-provider";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout() {
  const routes = useAppRoutes();
  const route = useRoutes(routes.toRouteObjects());
  console.log(route);
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen">
      <Sidebar />
      <div className="flex-1 h-screen flex flex-col">
        <Header />
        {/* <main className="p-6 min-h-0 overflow-auto">{<Outlet />}</main> */}
        <main className="p-6 min-h-0 overflow-auto">{route}</main>
      </div>
    </div>
  );
}
