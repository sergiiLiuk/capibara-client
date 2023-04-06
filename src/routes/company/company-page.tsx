import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function CompanyPage() {
  return (
    <div>
      <div className="border-b">Company tabs</div>
      <React.Suspense fallback={<div>Loading.. </div>}>
        {<Outlet />}
      </React.Suspense>
    </div>
  );
}
