import { useMemo } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export function NavigationItems() {
  //   const { scope, solution } = useAuth();
  const scope = {};

  return useMemo(
    () => [
      {
        key: "dashboard",
        type: "route" as const,
        name: "Dashboard",
        icon: <FontAwesomeIcon icon={faHouse} />,
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
    ],
    [scope]
  );
}
