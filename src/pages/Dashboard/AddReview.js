import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import fetcher from "../../api/axiosInstance";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const review = {
      name: user?.displayName,
      email: user?.email,
      rating: data.rating,
      desc: data.desc,
      img: user.photoURL,
    };

    fetcher.patch("add-reviews", review).then((res) => {
      toast.success("Thanks for review!");
    });
  };

  return (
    <div className=" mx-auto w-96 ">
      <div class="card-body  bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-2xl">Add Your Review</h1>
        <form className="mx-auto w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Rating */}
          <label class="label">
            <span class="label-text">Rating</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-lg "
            placeholder="Rating"
            {...register("rating", {
              required: {
                value: true,
                message: "Rating is Required",
              },
              min: {
                value: 1,
                message: "Please rate 1 to 5",
              },
              max: {
                value: 5,
                message: "Please rate 1 to 5",
              },
            })}
          />
          {/* Rating error handling */}
          <label class="label">
            {errors.rating?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.rating.message}
              </span>
            )}
            {errors.rating?.type === "max" && (
              <span class="label-text-alt text-red-600">
                {errors.rating.message}
              </span>
            )}
            {errors.rating?.type === "min" && (
              <span class="label-text-alt text-red-600">
                {errors.rating.message}
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
          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
