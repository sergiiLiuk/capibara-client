import { useMemo } from "react";
import React from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export function BottomNavigationItems() {
  const scope = {};

  return useMemo(
    () => [
      {
        key: "superAdminPanel",
        type: "route" as const,
        name: "Admin panel",
        icon: <MdOutlineAdminPanelSettings />,
        route: "/super-admin-panel",
      },
    ],
    [scope]
  );
}
