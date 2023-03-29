import { useMemo } from "react";
import { RouteName, RouteParams } from "./route.types";

export type SiteNavigationItem = {
  key: string;
  type: "route";
  name: string;
  icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
  disabled?: boolean;
  route: RouteName;
  params?: RouteParams;
};

export function NavigationItems(): SiteNavigationItem[] {
  //   const { scope, solution } = useAuth();
  const scope = {};

  return useMemo(
    () => [
      {
        key: "dashboard",
        type: "route" as const,
        name: "Dashboard",
        icon: undefined,
        route: RouteName.DASHBOARD,
      },
      {
        key: "companies",
        type: "route" as const,
        name: "Companies",
        icon: undefined,
        route: RouteName.COMPANIES,
      },
      {
        key: "people",
        type: "route" as const,
        name: "People",
        icon: undefined,
        route: RouteName.PEOPLE,
      },
    ],
    [scope]
  );
}
