import React from "react";
import { AppRouteDefinition, RouteName } from "../routing/route.types";
import { companyDetailPageRoutes } from "./company/company-page.route";
import { notFoundRoute } from "./not-found/not-found.route";

export function createRoutes(options: {
  dashboard: React.ComponentType;
}): AppRouteDefinition[] {
  return [
    {
      name: RouteName.DASHBOARD,
      path: "",
      element: <options.dashboard />,
    },
    ...companyDetailPageRoutes,

    notFoundRoute,
  ];
}
