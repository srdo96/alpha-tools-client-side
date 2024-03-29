import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import fetcher from "../api/axiosInstance";
import Loading from "../components/Loading/Loading";
import auth from "../firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();

  const { data, isLoading } = useQuery(["Tool", id], () =>
    fetcher.get(`/tools/${id}`)
  );

  const navigate = useNavigate();

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

  const { _id, name, img, desc, available, min_order, price_unit } = data.data;
  console.log("img", img);
  const onSubmit = ({ phone, address, order }) => {
    const userName = user.displayName;
    const userEmail = user.email;
    const totalPrice = price_unit * order;
    // console.log(phone, address, order);
    fetcher
      .patch("/orders", {
        toolId: _id,
        toolsName: name,
        img,
        price_unit,
        order,
        totalPrice,
        userName,
        userEmail,
        phone,
        address,
        status: "unpaid",
      })
      .then((res) => {
        const id = res?.data?.insertedId;
        navigate(`/payment/${id}`);
        console.log("Order place");
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  w-full px-4  lg:pt-16 md:px-8  mt-16 lg:max-h-screen">
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
      <div className="hero bg-white">
        <div className="card w-full max-w-lg shadow-2xl bg-gray-50">
          <div className="card-body">
            <h1 className="text-center text-2xl">Purchase From</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Order Quantity */}
              <label className="label">
                <span className="label-text">Order Quantity</span>
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
              <label className="label">
                {errors.order?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.order.message}
                  </span>
                )}
                {errors.order?.type === "min" && (
                  <span className="label-text-alt text-red-600">
                    {errors.order.message}
                  </span>
                )}
                {errors.order?.type === "max" && (
                  <span className="label-text-alt text-red-600">
                    {errors.order.message}
                  </span>
                )}
              </label>
              {/* User Name */}
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                value={user.displayName}
                // disabled
                disabled="disabled"
                {...register("nam")}
              />
              {/* Email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                value={user.email}
                // disabled
                disabled="disabled"
                {...register("userEmail")}
              />
              {/* Phone */}
              <label className="label">
                <span className="label-text">Phone No.</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="Phone Number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone number is Required",
                  },
                })}
              />
              {/* Phone No. error handling */}
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.phone?.message}
                  </span>
                )}
              </label>
              {/* Address */}
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="Address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
              />{" "}
              {/* Address error handling */}
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.address?.message}
                  </span>
                )}
              </label>
              <button type="submit" className="btn btn-primary btn-block mt-5">
                Purchase Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
