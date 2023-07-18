import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (!true) {
    return <Navigate to="/landing" replace />;
  }

  return children;
};

export default ProtectedRoute;
