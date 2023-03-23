import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/companies" className="underline">
        Go to companies
      </Link>
    </div>
  );
}
