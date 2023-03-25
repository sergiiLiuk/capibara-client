import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Layout from "./components/layout";
import Companies from "./routes/company/company";
import NotFoundPage from "./routes/not-found/not-found";
import Settings from "./routes/settings";
import LoginForm from "./components/login-form";

export default function App() {
  // const { status } = auth.state;
  const { status } = { status: "LOGGED_IN" };
  return (
    <>
      {status === "LOGGED_IN" && <Layout />}
      {status === "LOGGED_OUT" && <LoginForm />}
    </>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Dashboard />} />
    //     <Route path="login" element={<div>Login page</div>} />
    //     <Route path="companies" element={<Companies />} />
    //     <Route path="settings" element={<Settings />} />
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Route>
    // </Routes>
  );
}
