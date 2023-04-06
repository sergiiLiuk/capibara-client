import React from "react";
import { Outlet } from "react-router-dom";

export default function ProjectPage() {
  return (
    <div>
      <div className="border-b">Project tabs</div>
      <React.Suspense fallback={<div>Loading.. </div>}>
        {<Outlet />}
      </React.Suspense>
    </div>
  );
}
