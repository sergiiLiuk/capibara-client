import { JsonValue } from "type-fest";
import { ApiFetchOptions, ApiRequestInit } from "./api-fetch.types";
import { apiFetch } from "./api-fetch";

export function apiPOST<TResult = JsonValue>(
  url: string,
  body: JsonValue | BodyInit | undefined,
  fetchOptions?: ApiRequestInit,
  options?: ApiFetchOptions
): Promise<TResult> {
  return apiFetch(
    url,
    {
      method: "POST",
      body: createRequestBody(body),
      ...fetchOptions,
      headers: {
        ...createHeadersForRequestBody(body),
        ...fetchOptions?.headers,
      },
    },
    options
  );
}

function createRequestBody(
  data: JsonValue | BodyInit | undefined
): BodyInit | undefined {
  if (data === undefined) return undefined; // No request body.

  // The browser will handle serialization of these types.
  if (
    typeof data === "string" ||
    data instanceof Blob ||
    data instanceof FormData ||
    (typeof URLSearchParams !== "undefined" && data instanceof URLSearchParams)
  )
    return data;

  return JSON.stringify(data);
}

function createHeadersForRequestBody(
  data: JsonValue | BodyInit | undefined
): Record<string, string> {
  if (data === undefined) return {}; // No request body.

  // The browser will create headers for these types.
  if (
    typeof data === "string" ||
    data instanceof Blob ||
    data instanceof FormData ||
    (typeof URLSearchParams !== "undefined" && data instanceof URLSearchParams)
  )
    return {};

  return { "Content-Type": "application/json" };
}
