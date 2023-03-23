import React from "react";
import { Link } from "react-router-dom";

export default function Companies() {
  return (
    <div>
      <p>Companies</p>
      <Link to="/" className="underline">
        Go to dashboard
      </Link>
    </div>
  );
}
