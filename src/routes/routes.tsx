import React from "react";
import { useRoutes } from "react-router-dom";
import { AppRouteDefinition, RouteName } from "../routing/route.types";
import { companiesRoutes } from "./company/companies.route";

import { notFoundRoute } from "./not-found/not-found.route";
import { peopleRoutes } from "./person/people.route";

const Dashboard = React.lazy(() => import("./dashboard"));

export function createRoutes(): AppRouteDefinition[] {
  return [
    {
      name: RouteName.DASHBOARD,
      path: "",
      element: <Dashboard />,
    },
    ...companiesRoutes,
    ...peopleRoutes,
    notFoundRoute,
  ];
}
