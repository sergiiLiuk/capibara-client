import React from "react";
import { LinkProps, Link as ReactRouterLink } from "react-router-dom";
import { Merge } from "type-fest";
import {
  GetRoutePathOptions,
  useGetRoutePath,
} from "../routing/use-get-route-path";

export const Link = React.forwardRef(function Link(
  // props: Merge<LinkProps, GetRoutePathOptions>,
  //TODO: implement types
  props: any,
  ref: React.ForwardedRef<any>
) {
  const { to, params, search, hash, keep, children, ...rest } = props;

  const getRoutePath = useGetRoutePath();

  const path = getRoutePath({ to, params, search, hash, keep });
  if (!path) return React.createElement("span", { ...rest, ref }, children);

  return React.createElement(
    ReactRouterLink,
    { ...rest, to: path, ref },
    children
  );
});
