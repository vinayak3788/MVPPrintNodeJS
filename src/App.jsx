import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<p>404: Page not found</p>} />
    </Routes>
  );
}

export default App;
