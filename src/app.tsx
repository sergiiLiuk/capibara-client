import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Layout from "./components/layout";
import Companies from "./routes/companies";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="companies" element={<Companies />} />
        </Route>
        <Route path="login" element={<div>Login page</div>} />
      </Routes>
    </Router>
  );
}
