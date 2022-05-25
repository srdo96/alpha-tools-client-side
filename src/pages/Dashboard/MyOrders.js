import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetcher from "../../api/axiosInstance";
import DeleteConfirmModal from "../../components/ DeleteConfirmModal";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user.email;
  const { data, isLoading, refetch } = useQuery("myOrders", () =>
    fetcher.get(`/orders/${email}`)
  );

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }

  return (
    <div class="ml-2">
      <table class="table w-full h-screen">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Order Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th></th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map(
            (
              {
                _id,
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
                <td>{toolsName}</td>
                <td>{price_unit}</td>
                <td>{order}</td>
                <td>{totalPrice}</td>
                {status.includes("unpaid") ? (
                  <td>
                    <Link
                      to={`/dashboard/payment/${_id}`}
                      className="px-3 pb-2 border-2 rounded-xl  font-medium bg-emerald-500"
                    >
                      pay
                    </Link>
                  </td>
                ) : (
                  <td>paid</td>
                )}
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
                {transactionId ? <td>{transactionId}</td> : <td></td>}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
