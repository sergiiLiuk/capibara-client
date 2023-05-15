import React from "react";

type Props = {
  error?: unknown;
  children?: React.ReactNode;
};

export function ErrorMessage({ children }: Props) {
  return (
    <h1 className="px-2 py-1 text-red-700 border border-red-500">
      {"Something went wrong."}
    </h1>
  );
}
