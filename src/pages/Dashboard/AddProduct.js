import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import fetcher from "../../api/axiosInstance";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, desc, minimum, available, price_unit, img }) => {
    const product = {
      name,
      img,
      desc,
      min_order: minimum,
      available,
      price_unit,
      addedBy: user.email,
    };

    fetcher.patch("tools", product).then((res) => {
      toast.success("New product added!");
    });
  };

  return (
    <div className=" mx-auto w-96 ">
      <div class="card-body  bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-2xl">Add New Product</h1>
        <form className="mx-auto w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-lg "
            placeholder="Product name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          {/* Name error handling */}
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>

          {/* Description */}
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            type="text"
            className="input input-bordered w-full max-w-lg "
            placeholder="Description"
            {...register("desc", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />

          {/* Description error handling */}
          <label class="label">
            {errors.desc?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.desc.message}
              </span>
            )}
          </label>
          {/* Minimum Order */}
          <label class="label">
            <span class="label-text">Minimum Order</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-lg "
            placeholder="Minimum number"
            {...register("minimum", {
              required: {
                value: true,
                message: "Minimum is Required",
              },
              min: {
                value: 1,
                message: "Can't be less then 1",
              },
            })}
          />
          {/* Minimum order error handling */}
          <label class="label">
            {errors.minimum?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.minimum.message}
              </span>
            )}
            {errors.minimum?.type === "min" && (
              <span class="label-text-alt text-red-600">
                {errors.minimum.message}
              </span>
            )}
          </label>
          {/* Available Product */}
          <label class="label">
            <span class="label-text">Available Product</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-lg "
            placeholder="Available"
            {...register("available", {
              required: {
                value: true,
                message: "Total is Required",
              },
              min: {
                value: 1,
                message: "Can't be less then 1",
              },
            })}
          />
          {/* Available error handling */}
          <label class="label">
            {errors.available?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.available.message}
              </span>
            )}
            {errors.available?.type === "min" && (
              <span class="label-text-alt text-red-600">
                {errors.available.message}
              </span>
            )}
          </label>

          {/* Price per Unit */}
          <label class="label">
            <span class="label-text">Price per unit</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-lg "
            placeholder="price per unit"
            {...register("price_unit", {
              required: {
                value: true,
                message: "Price is Required",
              },
              min: {
                value: 1,
                message: "Can't be less then 1",
              },
            })}
          />
          {/* Per unit price error handling */}
          <label class="label">
            {errors.price_unit?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.price_unit.message}
              </span>
            )}
            {errors.price_unit?.type === "min" && (
              <span class="label-text-alt text-red-600">
                {errors.price_unit.message}
              </span>
            )}
          </label>

          {/* Image  */}
          <label class="label">
            <span class="label-text">Image</span>
          </label>
          <input
            type="url"
            className="input input-bordered w-full max-w-lg "
            placeholder="Product image"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          {/* Image error handling */}
          <label class="label">
            {errors.img?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.img.message}
              </span>
            )}
          </label>

          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
