import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(errors);
    console.log(data);
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 className="text-center text-2xl">Login</h1>
            <button class="btn  btn-success mt-2">Login with Google</button>
            <div class="divider">OR</div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <label class="label">
                <span class="label-text">Email</span>
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
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>

              {/* Password */}
              <label class="label">
                <span class="label-text">Password</span>
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
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>

              {/* reset password */}
              <Link to="/reset">
                <small className="underline">Forget password</small>
              </Link>

              <button type="submit" className="btn btn-primary btn-block mt-5">
                Login
              </button>
            </form>

            <div class="pt-5 pb-12 text-center">
              <p>
                Don&#x27;t have an account?
                <Link to="/register" class="font-semibold underline ml-1">
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
