import React, { Suspense, useContext } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./components/layout";
import { Spinner } from "./components/spinner";
import { AuthContext } from "./context/auth-context";
import Companies from "./routes/company/companies";
import { companyRoutes } from "./routes/company/company.route";
import Dashboard from "./routes/dashboard";
import LoginPage from "./routes/login/login-page";
import { notFoundRoute } from "./routes/not-found/not-found.route";
import { Profile } from "./routes/profile/profile";
import Projects from "./routes/projects/projects";
import { projectsRoutes } from "./routes/projects/projects.route";
import Settings from "./routes/settings";
import { RoleType } from "./gql/graphql";
import { spreadIf } from "./utils/spreadIf";
import { adminRoutes } from "./routes/admin/admin.route";

export default function App() {
  const { isAuthenticated, role } = useContext(AuthContext);

  const routes = [
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

        { path: "settings", element: <Settings /> },
        { path: "profile", element: <Profile /> },

        ...spreadIf(role === RoleType.SuperAdmin, { ...adminRoutes }),

        ...notFoundRoute,
      ],
    },
  ];
  const router = useRoutes(routes);

  // if (!isAuthenticated) return <LoginPage />;
  return <Suspense fallback={<Spinner />}>{router}</Suspense>;
}
