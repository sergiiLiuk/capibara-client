import { useMemo } from "react";
import React from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RoleType } from "../gql/graphql";

export function BottomNavigationItems() {
  const scope = {};

  return useMemo(
    () => [
      {
        key: "superAdminPanel",
        type: "route" as const,
        name: "Admin panel",
        icon: <MdOutlineAdminPanelSettings />,
        route: "/admin-panel",
        access: RoleType.SuperAdmin,
      },
    ],
    [scope]
  );
}
