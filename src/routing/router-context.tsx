import React, { createContext, useContext, useMemo } from "react";
import { AppRoutesModel } from "./route.model";
import { AppRouteDefinition } from "./route.types";

export const AppRouterContext = createContext<AppRoutesModel | null>(null);

type Props = {
  routes: AppRouteDefinition[];
  children: React.ReactNode;
};

export function AppRouterProvider({ routes, children }: Props) {
  const value = useMemo(
    () => AppRoutesModel.fromRouteDefinitions(routes),
    [routes]
  );

  return (
    <AppRouterContext.Provider value={value}>
      {children}
    </AppRouterContext.Provider>
  );
}

export function useAppRoutes() {
  const context = useContext(AppRouterContext);
  if (!context)
    throw new Error("useAppRoutes must be used within a AppRouterProvider");

  return context;
}
