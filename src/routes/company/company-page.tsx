import React from "react";
import { Outlet } from "react-router-dom";
import { CompanyNavigationTabs } from "./company-navigation-tabs";
import { TabHeader } from "../../components/details-header";
import { Spinner } from "../../components/spinner";

export default function CompanyPage() {
  return (
    <div>
      <TabHeader />
      <div className="border-b border-cyan-800">
        {<CompanyNavigationTabs />}
      </div>
      <React.Suspense fallback={<Spinner />}>{<Outlet />}</React.Suspense>
    </div>
  );
}
