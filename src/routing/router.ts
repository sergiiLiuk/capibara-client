import { useLocation, useMatch } from "react-router-dom";
import { RouteName } from "./route.types";
import { useAppRoutes } from "./router-context";

/** Note: This won't work if the user has changed the language without navigating. */
export function useIsRouteActive(
  routeName: RouteName,
  { silent = false } = {}
) {
  const appRoutes = useAppRoutes();
  const pattern = appRoutes.byName[routeName]?.pattern;
  if (!pattern) {
    if (!silent)
      console.error("router", "could not find route pattern", { routeName });
    return false;
  }
  return !!useMatch({ path: pattern });
}

export function useRouteQuery() {
  return new URLSearchParams(useLocation().search);
}

export function useRouteHash() {
  return new URLSearchParams(useLocation().hash);
}
