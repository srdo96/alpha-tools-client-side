import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import auth from "../firebase.init";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  // console.log(user);

  if (loading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
