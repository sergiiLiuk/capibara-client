import React from "react";

const AdminPanel = React.lazy(() => import("./admin-panel"));
const UserOverviewTab = React.lazy(() => import("./tabs/user-overview-tab"));

export const adminRoutes = {
  path: "admin-panel",
  element: <AdminPanel />,
  children: [
    {
      path: "",
      element: <UserOverviewTab />,
    },
    {
      path: "test",
      element: <div>Test </div>,
    },
  ],
};
