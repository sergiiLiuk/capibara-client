import React from "react";

type Props = {
  handleSubmit: () => void;
  children: React.ReactNode;
};

export const Form = ({ handleSubmit, children }: Props) => {
  return <form onSubmit={handleSubmit}>{children} </form>;
};
