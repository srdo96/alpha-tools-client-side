import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetcher from "../../api/axiosInstance";
import DeleteConfirmModal from "../../components/ DeleteConfirmModal";
import DeleteProductConfirmModal from "../../components/DeleteProductConfirmModal";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const ManageProducts = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user.email;
  const { data, isLoading, refetch } = useQuery("allTools", () =>
    fetcher(`/tools`)
  );

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }

  return (
    <div className="ml-2">
      <table className="table w-full max-h-screen">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>#</th>
            <th>Img</th>
            <th>Name</th>
            <th>Available</th>
            <th>Minimum Order</th>
            <th>Unit Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map(
            ({ _id, img, name, min_order, available, price_unit }, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <img
                    alt="profil"
                    src={img}
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </td>
                <td>{name}</td>
                <td>{price_unit}</td>
                <td>{available}</td>
                <td>{min_order}</td>
                <td>
                  <label htmlFor="delete-product-confirm-modal">
                    <svg
                      htmlFor="delete-product-confirm-modal"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-red-500 cursor-pointer"
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
                  <DeleteProductConfirmModal refetch={refetch} id={_id} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
