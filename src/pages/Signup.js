import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import fetcher from "../api/axiosInstance";
import Loading from "../components/Loading/Loading";
import auth from "../firebase.init";

const Signup = () => {
  const [user, loading] = useAuthState(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ name, email, password }) => {
    // console.log(email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    // console.log(data);
  };

  if (loading || googleLoading || emailLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }

  // console.log("user", user, emailUser);
  if (user || googleUser || emailUser) {
    // const newUser = {
    //   email: user?.email,
    //   name: user?.displayName,
    //   phone: user?.phoneNumber,
    // };
    // fetcher.put(`/user/${user?.email}`, newUser);
    navigate("/");
  }
  return (
    <div className="mt-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-2xl">Sign Up</h1>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-success mt-2"
            >
              {googleLoading ? <Loading /> : "Signup with Google"}
            </button>
            <div className="divider">OR</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              {/* Name error handling */}
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>

              {/* Email */}
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-lg "
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              {/* Email error handling */}
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
              {/* Password */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-lg "
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be six characters or longer",
                  },
                })}
              />
              {/* Password error handling */}
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
              {updateError && (
                <p className="text-red-500 text-center">
                  {updateError.message}
                </p>
              )}
              {emailError && (
                <p className="text-red-500 text-center">{emailError.message}</p>
              )}
              <button type="submit" className="btn btn-primary btn-block mt-5">
                {emailLoading ? <Loading /> : "Sign up"}
                {updating && <Loading />}
              </button>
            </form>
            <div className="pt-5 pb-12 text-center">
              <p>
                Already have an account?
                <Link to="/login" className="font-semibold underline ml-1">
                  Login.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
