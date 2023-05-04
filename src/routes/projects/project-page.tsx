import React from "react";
import { Outlet } from "react-router-dom";
import { TabHeader } from "../../components/details-header";
import { ProjectNavigationTabs } from "./project-navigation-tabs";

export default function ProjectPage() {
  return (
    <div>
      <TabHeader />
      <div className="border-b border-cyan-800">
        {<ProjectNavigationTabs />}
      </div>
      <React.Suspense fallback={<div>Loading.. </div>}>
        {<Outlet />}
      </React.Suspense>
    </div>
  );
}
