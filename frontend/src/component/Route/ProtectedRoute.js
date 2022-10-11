import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
    if (user===null) {
      return <Navigate to="/login" replace />;
    }
    // if (user.role !== "admin") {
    //   return <Navigate to="/login" replace />;
    // }
    return children;
  };
export default ProtectedRoute;