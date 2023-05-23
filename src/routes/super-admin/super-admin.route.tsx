import React from "react";

const SuperAdminPanel = React.lazy(() => import("./super-admin-panel"));
const UserOverviewTab = React.lazy(() => import("./tabs/user-overview-tab"));

export const superAdminRoutes = [
  {
    path: "super-admin-panel",
    element: <SuperAdminPanel />,
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
  },
];
