import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetcher from "../api/axiosInstance";
import Loading from "../components/Loading/Loading";
import auth from "../firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();

  const { data, isLoading } = useQuery(["Tool", id], () =>
    fetcher.get(`/tools/${id}`)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (isLoading || loading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }

  const { name, img, desc, available, min_order, price_unit } = data.data;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  w-full px-4  lg:pt-16 md:px-8  mt-16 lg:min-h-screen">
      <div className="bg-white shadow  sm:rounded-lg ">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Tool Information
          </h3>
        </div>
        <div>
          <img src={img} alt="" />
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Tool name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Details</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {desc}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Available</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {available}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Minimum Order
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {min_order}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Price per Unit
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {price_unit}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="hero bg-white">
        <div class="card w-full max-w-lg shadow-2xl bg-gray-50">
          <div class="card-body">
            <h1 className="text-center text-2xl">Purchase From</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Order Quantity */}
              <label class="label">
                <span class="label-text">Order Quantity</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full max-w-lg "
                defaultValue={min_order}
                {...register("order", {
                  required: {
                    value: true,
                    message: "Order Quantity is Required",
                  },
                  min: {
                    value: min_order,
                    message: `Place order ${min_order} to ${available}`,
                  },
                  max: {
                    value: available,
                    message: `Place order ${min_order} to ${available}`,
                  },
                })}
              />
              {/* Order error handling */}
              <label class="label">
                {errors.order?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.order.message}
                  </span>
                )}
                {errors.order?.type === "min" && (
                  <span class="label-text-alt text-red-600">
                    {errors.order.message}
                  </span>
                )}
                {errors.order?.type === "max" && (
                  <span class="label-text-alt text-red-600">
                    {errors.order.message}
                  </span>
                )}
              </label>
              {/* Name */}
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                value={user.displayName}
                disabled
              />
              {/* Email */}
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                value={user.email}
                disabled
              />
              {/* Phone */}
              <label class="label">
                <span class="label-text">Phone No.</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="Phone Number"
              />
              {/* Address */}
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="Address"
              />
              <button type="submit" className="btn btn-primary btn-block mt-5">
                Buy
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;