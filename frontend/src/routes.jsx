import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Admin/Dashboard";
import Attendance from "./components/Teacher/Attendance";
import PrivateRoute from "./components/Auth/PrivateRoute"; // Import PrivateRoute

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root path to login */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/attendance"
        element={
          <PrivateRoute>
            <Attendance />
          </PrivateRoute>
        }
      />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default AppRoutes;