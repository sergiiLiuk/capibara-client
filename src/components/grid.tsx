import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Grid = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">{children}</div>
  );
};
