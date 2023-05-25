import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./navigation/sidebar/sidebar";
import { Spinner } from "./spinner";
import MobileMenu from "./navigation/mobile-menu";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen">
      <Sidebar />
      <MobileMenu />
      <div className="flex-1 h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="min-h-0">
          <React.Suspense fallback={<Spinner />}>{<Outlet />}</React.Suspense>
        </main>
      </div>
    </div>
  );
}
