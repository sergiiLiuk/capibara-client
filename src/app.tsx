import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "./components/layout";

import Companies from "./routes/company/companies";
import { companiesRoutes } from "./routes/company/companies.route";
import Dashboard from "./routes/dashboard";
import NotFoundPage from "./routes/not-found/not-found";
import { projectsRoutes } from "./routes/projects/projects.route";
import Projects from "./routes/projects/projects";

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

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      ...companiesRoutes,
      {
        path: "projects",
        element: <Projects />,
      },
      ...projectsRoutes,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
