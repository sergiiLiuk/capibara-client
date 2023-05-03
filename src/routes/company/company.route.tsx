import React from "react";
import * as api from "./company.api";
import { useParams } from "react-router-dom";
import { Company } from "../../gql/graphql";

const CompanyPage = React.lazy(() => import("./company-page"));
const CompanyOverviewTab = React.lazy(
  () => import("./tabs/company-overview-tab")
);

function Container(props: {
  component: React.ComponentType<{ company: Company }>;
  showError?: boolean;
}) {
  const { id } = useParams();
  //TODO: implement error message
  if (!id) return null;

  const { loading, error, data } = api.useCompanyData({ id });

  //TODO: implement loading spinner
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Somethingwent wrong</div>;

  const { company } = data;

  return <props.component company={company} />;
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
