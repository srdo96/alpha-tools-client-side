import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import auth from "../firebase.init";
import useAdmin from "../hooks.js/useAdmin";

const AdminRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }
  // console.log("admin", admin);
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
