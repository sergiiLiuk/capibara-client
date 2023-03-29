import React from "react";
import { AppRouteDefinition, RouteName } from "../routing/route.types";
import { companiesRoutes } from "./company/companies.route";

import { notFoundRoute } from "./not-found/not-found.route";
import { peopleRoutes } from "./person/people.route";

export function createRoutes(options: {
  dashboard: React.ComponentType;
}): AppRouteDefinition[] {
  return [
    {
      name: RouteName.DASHBOARD,
      path: "",
      element: <options.dashboard />,
    },
    ...companiesRoutes,
    ...peopleRoutes,

    notFoundRoute,
  ];
}
