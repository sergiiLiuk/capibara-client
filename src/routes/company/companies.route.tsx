import React from "react";
import { useParams } from "react-router-dom";
import Companies from "./companies";
// import { AppRouteDefinition, RouteName } from "../../routing/route.types";
const CompanyPage = React.lazy(() => import("./company-page"));
const CompanyOverviewTab = React.lazy(
  () => import("./tabs/company-overview-tab")
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

export const companiesRoutes = [
  {
    path: "companies",
    element: <Companies />,
  },
  {
    path: "companies/:id",
    element: <CompanyPage />,
    // children: [
    //   {
    //     path: ":id/overview-tab",
    //     element: <CompanyOverviewTab />,
    //   },
    // ],
  },
];
