import React, { useMemo } from "react";
import { NavigationTabs } from "../../components/navigation-tabs";

export const CompanyNavigationTabs = () => {
  const items = useMemo(
    () => [
      {
        path: "",
        label: "Company overview",
      },
      {
        path: "test",
        label: "Test",
      },
    ],
    []
  );
  return <NavigationTabs items={items} />;
};
