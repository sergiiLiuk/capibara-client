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
        key: "overview",
        type: "route" as const,
        name: "Overview",
        icon: undefined,
        route: RouteName.DASHBOARD,
      },
      {
        key: "company",
        type: "route" as const,
        name: "Company",
        icon: undefined,
        route: RouteName.COMPANY_PAGE,
      },
    ],
    [scope]
  );
}
