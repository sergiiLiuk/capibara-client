import { ApolloProvider } from "@apollo/client";
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app";
import client from "./utils/apollo-client";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

if (process.env.NODE_ENV === "development") {
  new EventSource("/esbuild").addEventListener("change", () =>
    location.reload()
  );
}

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>
);
