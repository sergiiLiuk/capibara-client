import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ children, onClick, disabled = false }: Props) => {
  return (
    <button
      disabled={disabled}
      className="bg-sky-700 hover:bg-sky-600 hover:cursor-pointer px-2 py-1 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
