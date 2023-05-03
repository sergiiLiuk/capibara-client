import React, { Suspense } from "react";
import { createHashRouter, useRoutes } from "react-router-dom";
import Layout from "./components/layout";

import Dashboard from "./routes/dashboard";
import NotFoundPage from "./routes/not-found/not-found";
import { projectsRoutes } from "./routes/projects/projects.route";
import Projects from "./routes/projects/projects";
import Companies from "./routes/company/companies";
import { companyRoutes } from "./routes/company/company.route";

// export default function App() {
//   // const { status } = auth.state;
//   const { status } = { status: "LOGGED_IN" };
//   return (
//     <>
//       {status === "LOGGED_IN" && <Layout />}
//       {status === "LOGGED_OUT" && <LoginForm />}
//     </>
//   );
// }
export default function App() {
  const router = useRoutes(routes);
  return <Suspense fallback={<div>Loading...</div>}>{router}</Suspense>;
}

export const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "companies",
        element: <Companies />,
      },
      ...companyRoutes,
      {
        path: "projects",
        element: <Projects />,
      },
      ...projectsRoutes,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
