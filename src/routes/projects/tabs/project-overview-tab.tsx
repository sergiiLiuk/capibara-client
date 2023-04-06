import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectOverviewTab() {
  const { id } = useParams();
  return <div>Project overview tab: id - {id}</div>;
}
