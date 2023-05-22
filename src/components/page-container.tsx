import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return <div className="container mx-auto p-4">{children}</div>;
};
