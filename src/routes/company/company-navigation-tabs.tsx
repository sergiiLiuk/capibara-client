import React, { useMemo } from "react";
import { NavigationTabs } from "../../components/navigation-tabs";

type Props = {
  data: any;
};

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
