import React from "react";
import { Outlet } from "react-router-dom";
import { TabHeader } from "../../components/details-header";
import ErrorBoundary from "../../components/error-boundary";
import { PageContainer } from "../../components/page-container";
import { Spinner } from "../../components/spinner";
import { AdminNavigationTabs } from "./admin-navigation-tabs";
import { RegisterUser } from "./tabs/register-user";

export default function SuperAdminPanel() {
  return (
    <PageContainer>
      <div>
        <div className="border-b pt-2 border-cyan-800">
          {<AdminNavigationTabs />}
        </div>
        <TabHeader>
          <div className="flex-1"> </div>
          <div className="flex gap-2">
            <RegisterUser />
          </div>
        </TabHeader>
        <ErrorBoundary>
          <React.Suspense fallback={<Spinner />}>{<Outlet />}</React.Suspense>
        </ErrorBoundary>
      </div>
    </PageContainer>
  );
}
