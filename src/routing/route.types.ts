export enum RouteName {
  "DASHBOARD" = "/",

  "ADMIN_PAGE" = "ADMIN_PAGE",

  "COMPANIES" = "COMPANIES",
  "COMPANY_PAGE_OVERVIEW_TAB" = "COMPANY_PAGE_OVERVIEW_TAB",

  "PEOPLE" = "PEOPLE",
  "PERSON_PAGE_OVERVIEW_TAB" = "PERSON_PAGE_OVERVIEW_TAB",

  "NOT_FOUND" = "NOT_FOUND",
}

export interface AppRouteDefinition {
  /**
   * A route with a null name can't be linked to, but still can be used for matching.
   * Meant for legacy redirects.
   */
  name: RouteName | null;

  parent?: RouteName;

  /** An empty string denotes an index route. */
  path: any;
  element: React.ReactNode;
}

export type RouteParams = Record<string, string | undefined>;

/**
 * We use the URL hash string to extract information upon load, like saved
 * searches and tokens. The extracted information should be removed after use.
 *
 * As this happens in multiple places in the frontend, we should use this enum
 * to avoid clashes in key names.
 */
export type HashQueryKey =
  | typeof STATUS_HASH_QUERY_KEY
  | typeof EMAIL_HASH_QUERY_KEY
  | typeof QUERY_STRING_HASH_QUERY_KEY
  | typeof ANCHOR_HASH_QUERY_KEY;

/** Auth: Status of login attempt. */
export const STATUS_HASH_QUERY_KEY = "status" as const;
/** Email for auth status. */
export const EMAIL_HASH_QUERY_KEY = "email" as const;
/** Search page query string. */
export const QUERY_STRING_HASH_QUERY_KEY = "q" as const;
/** Scroll into view with useAnchor(). */
export const ANCHOR_HASH_QUERY_KEY = "anchor" as const;
