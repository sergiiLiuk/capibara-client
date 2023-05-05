import React from "react";
import { Outlet } from "react-router-dom";
import { TabHeader } from "../../components/details-header";
import { ProjectNavigationTabs } from "./project-navigation-tabs";
import { Spinner } from "../../components/spinner";

export default function ProjectPage() {
  return (
    <div>
      <TabHeader />
      <div className="border-b border-cyan-800">
        {<ProjectNavigationTabs />}
      </div>
      <React.Suspense fallback={<Spinner />}>{<Outlet />}</React.Suspense>
    </div>
  );
}
