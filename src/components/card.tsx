import React from "react";

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export const Card = ({ children, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className="w-full bg-white border border-gray-200 shadow hover:cursor-pointer"
    >
      {children}
    </div>
  );
};

type CardTitleProps = {
  children: React.ReactNode;
};
export const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <h5 className="p-2 text-2xl font-semibold tracking-tight text-gray-900 border-b-2 border-gray-200 ">
      {children}
    </h5>
  );
};

type CardContentProps = {
  children: React.ReactNode;
};
export const CardContent = ({ children }: CardContentProps) => {
  return <h5 className="p-2">{children}</h5>;
};
