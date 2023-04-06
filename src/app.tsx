import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Layout from "./components/layout";
import Companies from "./routes/company/companies";
import { companiesRoutes } from "./routes/company/companies.route";
import CompanyPage from "./routes/company/company-page";
import CompanyOverviewTab from "./routes/company/tabs/company-overview-tab";
import Dashboard from "./routes/dashboard";
import NotFoundPage from "./routes/not-found/not-found";

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
export default function Router() {
  const location = useLocation();

  return useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        {
          path: "companies",
          element: <Companies />,
        },
        ...companiesRoutes,
        // {
        //   path: "company",
        //   element: <CompanyPage />,
        //   children: [
        //     {
        //       path: ":id",
        //       element: <CompanyOverviewTab />,
        //     },
        //   ],
        // },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
}
