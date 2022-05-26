import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetcher from "../../api/axiosInstance";
import Loading from "../../components/Loading/Loading";
import UserDeleteConfirm from "../../components/UserDeleteConfirm";
import auth from "../../firebase.init";

const MakeAdmin = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user.email;
  const { data, isLoading, refetch } = useQuery("allUsers", () =>
    fetcher.get("/users")
  );

  if (isLoading || loading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }

  const handleMakeAdmin = (email) => {
    fetcher.put(`/user/admin/${email}`).then((res) => {
      toast.success("Make admin Successful");
      console.log(res);
      refetch();
    });
  };

  return (
    <div className="ml-2">
      <table className="table w-full max-h-screen">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map(({ _id, name, email, role, phone }, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>

              {role === "admin" ? (
                <td>admin</td>
              ) : (
                <td>
                  <button
                    onClick={() => handleMakeAdmin(email)}
                    className=" badge badge-success"
                  >
                    Make Admin
                  </button>
                </td>
              )}
              <td>
                <label htmlFor="delete-user-confirm-modal">
                  <svg
                    htmlFor="delete-user-confirm-modal"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </label>
                <UserDeleteConfirm refetch={refetch} email={email} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
