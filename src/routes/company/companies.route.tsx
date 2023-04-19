import React from "react";
import { useParams } from "react-router-dom";
import Companies from "./companies";
import * as api from "./companies.api";
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
  const { data, isLoading, error } = api.useGQLQuery(
    ["companies"],
    api.GET_COMPANIES
  );
  if (!data && isLoading) return <div>Loading...</div>;
  return <props.component data={data} />;
}

export const companiesRoutes = [
  {
    path: "companies",
    element: <Container component={Companies} />,
  },
  {
    path: "companies/:id",
    element: <CompanyPage />,
    children: [
      {
        path: "",
        element: <CompanyOverviewTab />,
      },
      {
        path: "test",
        element: <div>Test </div>,
      },
    ],
  },
];
