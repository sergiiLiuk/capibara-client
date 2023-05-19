import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./components/layout";
import { Spinner } from "./components/spinner";
import Companies from "./routes/company/companies";
import { companyRoutes } from "./routes/company/company.route";
import Dashboard from "./routes/dashboard";
import LoginPage from "./routes/login/login-page";
import { notFoundRoute } from "./routes/not-found/not-found.route";
import Projects from "./routes/projects/projects";
import { projectsRoutes } from "./routes/projects/projects.route";
import Settings from "./routes/settings";
import { Account } from "./routes/account/account";

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
  return <Suspense fallback={<Spinner />}>{router}</Suspense>;
}

export const routes = [
  {
    path: "login",
    element: <LoginPage />,
  },
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

      { path: "/settings", element: <Settings /> },
      { path: "/account", element: <Account /> },

      ...notFoundRoute,
    ],
  },
];
