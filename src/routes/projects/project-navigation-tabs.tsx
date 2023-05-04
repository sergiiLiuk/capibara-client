import React, { useMemo } from "react";
import { NavigationTabs } from "../../components/navigation-tabs";

export const ProjectNavigationTabs = () => {
  const items = useMemo(
    () => [
      {
        path: "",
        label: "Project overview",
      },
    ],
    []
  );
  return <NavigationTabs items={items} />;
};
