import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../service/authService";

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  return isAuthenticated() ? <>{element}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
