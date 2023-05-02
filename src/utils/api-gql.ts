import { JsonValue, Simplify } from "type-fest";
import { ApiFetchOptions, ApiRequestInit } from "./api-fetch.types";
import { ExecutionResult } from "graphql";
import { apiPOST } from "./api-rest";
import { isDefined } from "./is-definied";

export type ApiGqlResult<TResult> = Simplify<
  MapNonNullable<ExecutionResult<MapNonNullable<TResult>>, "data">
>;

interface ApiGqlOptions extends ApiFetchOptions {
  nullable?: boolean;
  url?: string;
}

export async function apiGQL<TResult = JsonValue>(
  query: string,
  variables?: { [p: string]: any },
  fetchOptions?: ApiRequestInit,
  {
    nullable = false,
    url = "http://localhost:5000/graphql",
    ...options
  }: ApiGqlOptions = {}
): Promise<ApiGqlResult<TResult>> {
  const body: ExecutionResult<TResult> = await apiPOST(
    url,
    {
      query,
      variables,
    } as JsonValue,
    fetchOptions,
    options
  );

  const errors = body.errors || [];
  const hasData = Object.values(body.data || {}).some(isDefined);

  const match = /(query|mutation) (\w+)/.exec(query);
  const opType = match?.[1] as "query" | "mutation" | undefined;
  const opName = match?.[2] ?? query.slice(0, 128);

  // Errors are regarded as critical if no data is returned.
  //   if (!hasData && (errors.length || !nullable))
  //     throw new GqlError({ opType, opName, errors });

  const meta: GqlMeta = { opType, opName };
  Object.defineProperty(body, GQL_META, { value: meta });

  return body as any;
}

export type GqlMeta = {
  opType: "query" | "mutation" | undefined;
  opName: string;
  //   errors: readonly GraphQLError[];
};

const GQL_META: unique symbol = Symbol();

export function getGqlMeta(data: any): GqlMeta | null {
  return data?.[GQL_META] ?? null;
}
