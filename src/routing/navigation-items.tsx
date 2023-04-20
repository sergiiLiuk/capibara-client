import { useMemo } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { RiDashboardFill } from "react-icons/ri";
import { BiTestTube } from "react-icons/bi";

export function NavigationItems() {
  //   const { scope, solution } = useAuth();
  const scope = {};

  return useMemo(
    () => [
      {
        key: "dashboard",
        type: "route" as const,
        name: "Dashboard",
        icon: <RiDashboardFill />,
        route: "/",
      },
      {
        key: "companies",
        type: "route" as const,
        name: "Companies",
        icon: <FontAwesomeIcon icon={faBuilding} />,
        route: "companies",
      },
      {
        key: "projects",
        type: "route" as const,
        name: "Projects",
        icon: <FontAwesomeIcon icon={faDiagramProject} />,
        route: "projects",
      },
      {
        key: "test",
        type: "route" as const,
        name: "Test",
        icon: <BiTestTube />,
        route: "projects",
        submenu: true,
        submenuItems: [
          {
            key: "submenu-1",
            name: "Submenu 1",
          },
        ],
      },
    ],
    [scope]
  );
}
