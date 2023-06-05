import React from "react";
import { Link as SLink } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Link = ({ to, children, onClick }: Props) => {
  return (
    <SLink to={to} onClick={onClick}>
      {children}
    </SLink>
  );
};
