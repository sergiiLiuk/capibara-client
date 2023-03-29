import React from "react";
import { Link, Outlet } from "react-router-dom";
// import { Outlet } from "../../routing/outlet";

export default function Companies() {
  return (
    <div>
      <p>Companies</p>
      <Link to="/" className="underline">
        Go to dashboard
      </Link>
      <React.Suspense fallback={<div>Loading.. </div>}>
        {<Outlet />}
      </React.Suspense>
    </div>
  );
}
