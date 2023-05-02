import { ApiFetchOptions, ApiRequestInit } from "./api-fetch.types";

export async function rawFetch(
  url: string,
  fetchOptions: ApiRequestInit,
  options?: ApiFetchOptions
): Promise<Response> {
  //   await waitForOnline();
  const response = await fetch(url, {
    ...fetchOptions,
    headers: {
      //   ...(!options?.noAcceptLanguage && {
      //     "Accept-Language": await getLanguage(),
      //   }),
      //   ...createTelemetryHeaders(),
      //   ...(await createAuthorizationHeaders(options)),
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    const { method = "GET" } = fetchOptions;
    const { status, statusText } = response;
    const body = response.headers
      .get("content-type")
      ?.startsWith("application/json")
      ? await response.json()
      : null;
    // if (status === 401) handleUnauthorized(options, url);
    // throw new FetchError({ method, url, status, statusText, body });
  }

  return response;
}
