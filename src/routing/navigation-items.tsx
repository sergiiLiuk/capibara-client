import { useMemo } from "react";

export function NavigationItems() {
  //   const { scope, solution } = useAuth();
  const scope = {};

  return useMemo(
    () => [
      {
        key: "dashboard",
        type: "route" as const,
        name: "Dashboard",
        icon: undefined,
        route: "/",
      },
      {
        key: "companies",
        type: "route" as const,
        name: "Companies",
        icon: undefined,
        route: "companies",
      },
      {
        key: "company-overview",
        type: "route" as const,
        name: "Company overview",
        icon: undefined,
        route: "company-overview",
      },
      {
        key: "people",
        type: "route" as const,
        name: "People",
        icon: undefined,
        route: "people",
      },
    ],
    [scope]
  );
}
