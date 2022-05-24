import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../components/Loading/Loading";

const Login = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  // React form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword(email, password);
    // console.log(data);
  };

  // if (googleLoading) {
  //   return (
  //     <div className="h-screen flex justify-center ">
  //       <Loading />;
  //     </div>
  //   );
  // }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="card w-full max-w-lg shadow-2xl bg-base-100">
          <div class="card-body">
            <h1 className="text-center text-2xl">Login</h1>

            {/* google login */}

            <button
              onClick={() => signInWithGoogle()}
              class="btn btn-outline mt-2"
            >
              {googleLoading ? <Loading /> : "Login with Google"}
            </button>

            {/* googleError */}
            <p class="text-red-500 text-center">{googleError?.message}</p>

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
                {emailLoading ? <Loading /> : "Login"}
              </button>
            </form>
            <div class="pt-5 pb-12 text-center">
              <p>
                Don&#x27;t have an account?
                <Link to="/signup" class="font-semibold underline ml-1">
                  Create Account
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
