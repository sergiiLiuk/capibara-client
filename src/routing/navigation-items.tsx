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
        key: "projects",
        type: "route" as const,
        name: "Projects",
        icon: undefined,
        route: "projects",
      },
    ],
    [scope]
  );
}
