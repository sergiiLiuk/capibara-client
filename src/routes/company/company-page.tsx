import React from "react";
import { Outlet } from "react-router-dom";
import { CompanyNavigationTabs } from "./company-navigation-tabs";
import { TabHeader } from "../../components/details-header";
import { Spinner } from "../../components/spinner";
import ErrorBoundary from "../../components/error-boundary";

export default function CompanyPage() {
  return (
    <div>
      <div className="border-b pt-2 border-cyan-800">
        {<CompanyNavigationTabs />}
      </div>
      {/* <TabHeader /> */}
      <ErrorBoundary>
        <React.Suspense fallback={<Spinner />}>{<Outlet />}</React.Suspense>
      </ErrorBoundary>
    </div>
  );
}
