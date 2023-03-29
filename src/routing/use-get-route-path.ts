import { useParams } from "react-router-dom";
import { RouteName, RouteParams } from "./route.types";
import { useRouteHash, useRouteQuery } from "./router";
import { useAppRoutes } from "./router-context";

export type GetRoutePathOptions = {
  to: RouteName;
  params?: RouteParams;
  search?: Record<string, string> | URLSearchParams;
  hash?: Record<string, string> | URLSearchParams;
  keep?: boolean;
};

export function useGetRoutePath(): (
  options: GetRoutePathOptions
) => string | null {
  const appRoutes = useAppRoutes();
  const currentParams = useParams();
  const currentSearch = useRouteQuery();
  const currentHash = useRouteHash();

  return ({ to, params, search, hash, keep }) => {
    const route = appRoutes.byName[to];
    if (!route) return null;

    const mergedParams = keep ? { ...currentParams, ...params } : params;
    const mergedSearch = keep ? mergeParams(currentSearch, search) : search;
    const mergedHash = keep ? mergeParams(currentHash, hash) : hash;

    return route.getPath({
      params: mergedParams,
      search: mergedSearch,
      hash: mergedHash,
    });
  };
}

function mergeParams(
  current: URLSearchParams,
  patch: URLSearchParams | Record<string, string> | undefined
) {
  if (!patch) return current;
  const uPatch =
    patch instanceof URLSearchParams ? patch : new URLSearchParams(patch);
  const merged = new URLSearchParams(current);
  for (const [key, value] of uPatch.entries()) merged.set(key, value);
  return merged;
}
