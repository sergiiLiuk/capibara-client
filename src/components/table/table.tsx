import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Table = ({ children }: Props) => {
  return (
    <table className="table-auto overflow-scroll w-full text-sm text-left text-gray-500">
      {children}
    </table>
  );
};

export const TableHead = ({ children }: Props) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      {children}
    </thead>
  );
};

export const TableBody = ({ children }: Props) => {
  return <tbody>{children}</tbody>;
};
