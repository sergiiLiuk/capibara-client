import { useMemo } from "react";
import React from "react";
import { BsBriefcase, BsBuilding, BsGrid1X2 } from "react-icons/bs";
import { TbMap2 } from "react-icons/tb";
export function NavigationItems() {
  const scope = {};

  return useMemo(
    () => [
      {
        key: "dashboard",
        type: "route" as const,
        name: "Dashboard",
        icon: <BsGrid1X2 />,
        route: "/",
      },
      {
        key: "map",
        type: "route" as const,
        name: "Map",
        icon: <TbMap2 />,
        route: "map",
      },
      {
        key: "companies",
        type: "route" as const,
        name: "Companies",
        icon: <BsBuilding />,
        route: "companies",
      },
      {
        key: "projects",
        type: "route" as const,
        name: "Projects",
        icon: <BsBriefcase />,
        route: "projects",
      },
    ],
    [scope]
  );
}
