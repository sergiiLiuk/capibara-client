import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "../routing/outlet";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/company" className="underline">
        Go to companies
      </Link>
    </div>
  );
}
