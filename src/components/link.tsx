import React from "react";
import { Link as SLink } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const Link = ({ to, children }: Props) => {
  return <SLink to={to}> {children}</SLink>;
};
