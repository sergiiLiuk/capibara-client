import React, { useMemo } from "react";
import { NavigationTabs } from "../../components/navigation-tabs";
import UserOverviewTab from "./tabs/user-overview-tab";

export const AdminNavigationTabs = () => {
  const items = useMemo(
    () => [
      {
        path: "",
        element: <UserOverviewTab />,
        label: "Users",
      },
    ],
    []
  );
  return <NavigationTabs items={items} />;
};
