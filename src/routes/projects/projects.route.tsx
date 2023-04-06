import React from "react";
const ProjectPage = React.lazy(() => import("./projects"));
const ProjectOverviewTab = React.lazy(
  () => import("./tabs/project-overview-tab")
);

function Container(props: {
  //   component: React.ComponentType<{ data: api.Workflow }>;
  component: React.ComponentType<{ data: any }>;
  showError?: boolean;
}) {
  // const { id } = useParams<"id">();
  // if (id === undefined) return null;
  const data: any = [];
  //   const { data, isLoading } = api.useWorkflowData({ id });
  // const { data, isLoading } = { data: [], isLoading: false };
  // if (isLoading) return <div>Loading..</div>;
  // if (data === undefined) return props.showError ? <div>Error</div> : null;

  return <props.component data={data} />;
}

export const projectsRoutes = [
  {
    path: "project",
    element: <ProjectPage />,
    children: [
      {
        path: ":id",
        element: <ProjectOverviewTab />,
      },
    ],
  },
];
