import React from "react";
import { Outlet } from "react-router-dom";

export default function Companies() {
  return (
    <div>
      <p>People</p>
      <React.Suspense fallback={<div>Loading.. </div>}>
        {<Outlet />}
      </React.Suspense>
    </div>
  );
}
