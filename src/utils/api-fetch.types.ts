// Narrow headers to make it composing easier.
import { Merge } from "type-fest";

export type ApiRequestInit = Merge<
  RequestInit,
  {
    headers?: Record<string, string>;
  }
>;

export interface ApiFetchOptions {
  noAuthorization?: boolean;
  noAcceptLanguage?: boolean;
  noImpersonation?: boolean;
}
