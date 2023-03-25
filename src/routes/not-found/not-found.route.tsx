import React from "react";
import { AppRouteDefinition, RouteName } from "../../routing/route.types";
import NotFoundPage from "./not-found";

export const notFoundRoute: AppRouteDefinition = {
  name: RouteName.NOT_FOUND,
  path: "*",
  element: <NotFoundPage />,
};
