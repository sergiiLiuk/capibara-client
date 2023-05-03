import React from "react";
import * as api from "./company.api";
import { useParams } from "react-router-dom";
const CompanyPage = React.lazy(() => import("./company-page"));
const CompanyOverviewTab = React.lazy(
  () => import("./tabs/company-overview-tab")
);

function Container(props: {
  //   component: React.ComponentType<{ data: api.Workflow }>;
  component: React.ComponentType<{ data: any }>;
  showError?: boolean;
}) {
  const { id } = useParams();
  //TODO: implement error message
  if (!id) return null;
  const { data, isLoading, error } = api.useCompanyData({ id });
  if (!data && isLoading) return <div>Loading...</div>;
  return <props.component data={data} />;
}

export const companyRoutes = [
  {
    path: "companies/:id",
    element: <CompanyPage />,
    children: [
      {
        path: "",
        element: <Container component={CompanyOverviewTab} />,
      },
      {
        path: "test",
        element: <div>Test </div>,
      },
    ],
  },
];
