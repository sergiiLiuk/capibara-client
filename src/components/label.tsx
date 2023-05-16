import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Label = ({ children }: Props) => {
  return (
    <label className="block mb-1 text-sm font-medium text-gray-900">
      {children}
    </label>
  );
};
