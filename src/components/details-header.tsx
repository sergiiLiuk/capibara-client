import React from "react";
import { useParams } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

export const TabHeader = ({ children }: Props) => {
  const { id } = useParams();
  return <div className="flex bg-slate-200 py-2 px-6">{children}</div>;
};
