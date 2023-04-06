import React from "react";
import { Link, Outlet } from "react-router-dom";
import CompanyOverviewTab from "./tabs/company-overview-tab";

export default function CompanyPage() {
  return (
    <div>
      <div className="border-b">Company tabs</div>
      <CompanyOverviewTab></CompanyOverviewTab>
      {/* <React.Suspense fallback={<div>Loading.. </div>}>
        {<Outlet />}
      </React.Suspense> */}
    </div>
  );
}
