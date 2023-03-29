import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Companies() {
  return (
    <div>
      <p>Companies</p>
      <React.Suspense fallback={<div>Loading.. </div>}>
        {<Outlet />}
      </React.Suspense>
    </div>
  );
}
