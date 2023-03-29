import React from "react";
import { useParams } from "react-router-dom";
import { AppRouteDefinition, RouteName } from "../../routing/route.types";

const People = React.lazy(() => import("./people"));
const OverviewTab = React.lazy(() => import("./tabs/people-overview-tab"));

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

export const peopleRoutes: AppRouteDefinition[] = [
  {
    name: RouteName.PEOPLE,
    path: "people",
    element: <Container component={People} />,
  },
  {
    name: RouteName.PERSON_PAGE_OVERVIEW_TAB,
    parent: RouteName.PEOPLE,
    path: "people/:id",
    element: <Container component={OverviewTab} />,
  },
];
