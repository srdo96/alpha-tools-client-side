import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetcher from "../../api/axiosInstance";
import DeleteConfirmModal from "../../components/ DeleteConfirmModal";
import Loading from "../../components/Loading/Loading";
import UserDeleteConfirm from "../../components/UserDeleteConfirm";
import auth from "../../firebase.init";

const ManageOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user.email;
  const { data, isLoading, refetch } = useQuery("allOrders", () =>
    fetcher.get("/orders")
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
    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Order Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Transaction Id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map(
            (
              {
                _id,
                userName,
                userEmail,
                toolsName,
                price_unit,
                order,
                totalPrice,
                status,
                transactionId,
              },
              index
            ) => (
              <tr>
                <th>{index + 1}</th>
                <td>{userName}</td>
                <td>{userEmail}</td>
                <td>{toolsName}</td>
                <td>{price_unit}</td>
                <td>{order}</td>
                <td>{totalPrice}</td>

                {status.includes("unpaid") ? (
                  <td>
                    <div className="text-red-500 font-bold">NOT PAID</div>
                  </td>
                ) : (
                  <td>
                    <div class=" px-6 text-blue-600 font-bold">PAID</div>
                  </td>
                )}
                {transactionId ? <td>{transactionId}</td> : <td></td>}
                {status.includes("unpaid") ? (
                  <td>
                    <label htmlFor="delete-confirm-modal">
                      <svg
                        htmlFor="delete-confirm-modal"
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
                    <DeleteConfirmModal refetch={refetch} id={_id} />
                  </td>
                ) : (
                  <td />
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
