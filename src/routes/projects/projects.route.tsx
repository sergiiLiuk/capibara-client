import React from "react";
import { Project } from "../../gql/graphql";
import { useParams } from "react-router-dom";
import * as api from "./project.api";

const ProjectPage = React.lazy(() => import("./project-page"));
const ProjectOverviewTab = React.lazy(
  () => import("./tabs/project-overview-tab")
);

function Container(props: {
  component: React.ComponentType<{ project: Project }>;
  showError?: boolean;
}) {
  const { id } = useParams();
  //TODO: implement error message
  if (!id) return null;

  const { loading, error, data } = api.useProjectData({ id });

  //TODO: implement loading spinner
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Somethingwent wrong</div>;

  const { project } = data;

  return <props.component project={project} />;
}

export const projectsRoutes = [
  {
    path: "projects/:id",
    element: <ProjectPage />,
    children: [
      {
        path: "",
        element: <Container component={ProjectOverviewTab} />,
      },
    ],
  },
];
