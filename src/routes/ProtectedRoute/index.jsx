import React from "react";
import { Navigate } from "react-router-dom";
import { utils } from "../../utils";
import { configs } from "../../configs";
import { routesObj } from "..";

const ProtectedRoute = ({ children }) => {
  if (!utils.getStorage(configs.storage.access_token)) {
    return <Navigate to={routesObj.login.path} replace />;
  }

  return children;
};

export default ProtectedRoute;
