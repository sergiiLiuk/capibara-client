import React from "react";
import { Link, Outlet } from "react-router-dom";
import CompanyOverviewTab from "./tabs/company-overview-tab";
import { CompanyNavigationTabs } from "./company-navigation-tabs";

export default function CompanyPage() {
  return (
    <div>
      <div className="border-b">{<CompanyNavigationTabs />}</div>
      <React.Suspense fallback={<div>Loading.. </div>}>
        {<Outlet />}
      </React.Suspense>
    </div>
  );
}
