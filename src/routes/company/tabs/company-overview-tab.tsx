import React from "react";
import { useParams } from "react-router-dom";

export default function CompanyOverviewTab() {
  const { id } = useParams();
  return (
    <div>
      <div> Company overview tab: id - {id}</div>
    </div>
  );
}