import React from "react";
import { Project } from "../../gql/graphql";
import { useParams } from "react-router-dom";
import * as api from "./project.api";
import { Spinner } from "../../components/spinner";

const ProjectPage = React.lazy(() => import("./project-page"));
const ProjectOverviewTab = React.lazy(
  () => import("./tabs/project-overview-tab")
);

function Container(props: {
  component: React.ComponentType<{ project: Project }>;
  showError?: boolean;
}) {
  const { id } = useParams();

  if (!id) return null;

  const { loading, error, data } = api.useProjectData({ id });

  if (loading) return <Spinner />;
  //TODO: implement error message
  if (error) return <div>Somethingwent wrong</div>;

  const { project } = data;

  return <props.component project={project} />;
}

export const projectsRoutes = [
  {
    path: "projects/:id",
    element: <Container component={ProjectPage} />,
    children: [
      {
        path: "",
        element: <Container component={ProjectOverviewTab} />,
      },
    ],
  },
];
