import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { createRoutes } from "./routes/routes";

import { AppRouteDefinition } from "./routing/route.types";
import { AppRouterProvider } from "./routing/router-context";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

if (process.env.NODE_ENV === "development") {
  new EventSource("/esbuild").addEventListener("change", () =>
    location.reload()
  );
}

const dashboard = React.lazy(() => import("./routes/dashboard"));

const routes: AppRouteDefinition[] = [...createRoutes({ dashboard })];

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouterProvider routes={routes}>
        <App />
      </AppRouterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
