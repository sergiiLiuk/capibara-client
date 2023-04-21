import React from "react";
import { useParams } from "react-router-dom";

export const TabHeader = () => {
  const { id } = useParams();
  return <div className="bg-slate-200 py-2 px-6">Tab Header</div>;
};
