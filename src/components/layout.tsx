import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar/sidebar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen">
      <Sidebar />
      <div className="flex-1 h-screen flex flex-col">
        <Header />
        <main className="min-h-0 overflow-auto">
          <React.Suspense fallback={<div>Loading.. </div>}>
            {<Outlet />}
          </React.Suspense>
        </main>
      </div>
    </div>
  );
}
