import React from "react";
import { Outlet } from "react-router-dom";
import { TabHeader } from "../../components/details-header";
import { Spinner } from "../../components/spinner";
import { ProjectNavigationTabs } from "./project-navigation-tabs";
import { Project } from "../../gql/graphql";
import { EditProject } from "./edit-project";
import { DeleteProject } from "./delete-project";
import ErrorBoundary from "../../components/error-boundary";

type Props = {
  project: Project;
};

export default function ProjectPage({ project }: Props) {
  return (
    <div>
      <div className="border-b pt-2 border-cyan-800">
        {<ProjectNavigationTabs />}
      </div>
      <TabHeader>
        <div className="flex-1"> </div>
        <div className="flex gap-2">
          <EditProject project={project} />
          <DeleteProject project={project} />
        </div>
      </TabHeader>

      <ErrorBoundary>
        <React.Suspense fallback={<Spinner />}>{<Outlet />}</React.Suspense>
      </ErrorBoundary>
    </div>
  );
}
