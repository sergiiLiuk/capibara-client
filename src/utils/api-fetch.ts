import { JsonValue } from "type-fest";
import { ApiFetchOptions, ApiRequestInit } from "./api-fetch.types";
import { rawFetch } from "./raw-fetch";

const API_ACCEPT_HEADER = "application/json";

export async function apiFetch<TResult = JsonValue>(
  url: string,
  fetchOptions: ApiRequestInit,
  options?: ApiFetchOptions
): Promise<TResult> {
  const start = Date.now();

  const response = await rawFetch(
    url,
    {
      ...fetchOptions,
      headers: { Accept: API_ACCEPT_HEADER, ...fetchOptions.headers },
    },
    options
  );

  const data = await response.json();

  if (data && typeof data === "object") {
    const { method = "GET" } = fetchOptions;
    const { status } = response;
    const duration = Date.now() - start;
    const meta: FetchMeta = { method, url, status, duration };
    Object.defineProperty(data, FETCH_META, { value: meta });
  }

  return data;
}

const FETCH_META: unique symbol = Symbol();

export type FetchMeta = {
  method: string;
  url: string;
  status: number;
  duration: number;
};

export function getFetchMeta(data: any): FetchMeta | null {
  return data?.[FETCH_META] ?? null;
}
