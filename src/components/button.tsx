import React from "react";

type ButtonType = "button" | "submit";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: ButtonType;
};

export const Button = ({
  children,
  onClick,
  disabled = false,
  type,
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-primary hover:bg-primary/80 hover:cursor-pointer px-2 py-1 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
