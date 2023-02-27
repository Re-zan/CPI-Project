import React, { useRef, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Loading/Loading";
import google from "../../data/blogdata/images/google.png";
import MainNavber from "../Navber/MainNavber";
import MainFooter from "../Footer/MainFooter";

const Login = () => {
    const [showpass, setShowpass] = useState(false);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    

    // const [token] = UseToken(user || gUser);
    const EmailRef = useRef('');
    const navigate = useNavigate()
    let location = useLocation();
    let signInerror;
    let from = location.state?.from?.pathname || "/";


    if (gLoading || loading) {
        return <Loading></Loading>
    }

    if (gError || error) {
        signInerror = <p className="text-red-500"><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        navigate("/");
    }
    


  return (
    <>
      <MainNavber />
      <div className="d-flex h-screen my-auto align-self-center justify-content-center align-items-center">
        <div className="card w-96 bg-secondary shadow-xl">
          <div className="card-body">
            <h2 className="text-center mb-5">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs mb-3">
                <label className="label">
                  <span className="label-text text-base font-semibold">
                    Email:{" "}
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Please provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-danger">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-danger">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-base font-semibold">
                    Password:{" "}
                  </span>
                </label>
                <input
                  type={showpass ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 character or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-danger">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                onClick={() => setShowpass(!showpass)}
              />{" "}
              <span>See Password</span>
              {signInerror}
              <div className="d-flex mt-3 justify-content-center align-items-center">
                <input
                  type="submit"
                  value="Login"
                  className="grid btn bg-primary rounded-box input input-bordered w-full max-w-xs"
                />
              </div>
              <p className="m-3">
                You are new User?
                <span>
                  <Link
                    to="/register"
                    className="text-danger ps-1 text-error text-sm cursor-pointer"
                  >
                    Create New Account
                  </Link>
                </span>
              </p>
            </form>

            <hr className="solid" />
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-primary"
            >
              <span>
                <img src={google} alt="" />
              </span>{" "}
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default Login;