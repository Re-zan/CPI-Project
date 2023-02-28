import React, { useRef, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Form, Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Loading/Loading";
import google from "../../assets/images/google.png";
import TopMenu from "../Topmenubar/TopMenu";
import Topsearch from "../Topsearchbar/Topsearch";
import Mainnavbarpart from "../Mainnavbar/Mainnavbarpart";
import { Col, Container, Row } from "react-bootstrap";
import "../Auth/style.css";
import FooterPart from "../Footer/FooterPart";


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
        signInerror = <p className="text-red"><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        navigate("/");
    }
    


  return (
    <>
      {/* <MainNavber /> */}
      <TopMenu />
      <Topsearch />
      <Mainnavbarpart />
      <div style={{ background: "#eef0f0" }} className="py-5">
        <Container>
          <Row>
            <Col sm={12} md={6} className="m-auto">
              <div className="Contact_section py-5 rounded shadow p-5 bg-body rounded">
                <div className="Contact_text d-flex justify-content-around mb-5 pb-4 border-bottom">
                  <div>
                    <NavLink to="/login" className='fw-bolder fs-5' style={{ color:"#333333" }}>LOGIN</NavLink>
                  </div>
                  <div>
                    <NavLink to="/register" className='fw-bolder fs-5' style={{ color:"#333333" }}>REGISTER</NavLink>
                  </div>
                </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <label className="label">
                        <span className="label-text text-base font-semibold mb-2">
                          Email Address*{" "}
                        </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="input input-bordered w-full max-w-xs form-control"
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
                          <span className="label-text-alt text-danger form-control">
                            {errors.email.message}
                          </span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span className="label-text-alt text-danger form-control">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                    <div className=" w-full max-w-xs">
                      <label className="label">
                        <span className="label-text text-base font-semibold mb-2">
                          Password*{" "}
                        </span>
                      </label>
                      <input
                        type={showpass ? "text" : "password"}
                        placeholder="Enter Your Password"
                        className="input input-bordered w-full max-w-xs form-control"
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
                      style={{ background:"#b68c5a" }}
                        type="submit"
                        value="Login"
                        className="grid btn text-white rounded-box input input-bordered w-full max-w-xs"
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
                    <div className="text-center">
                    <hr className="solid" />
                      <button
                        onClick={() => signInWithGoogle()}
                        className="btn border text-center shadow google_btn"
                        style={{ color:"#b68c5a" }}
                      >
                        <span>
                          <img src={google} alt="" />
                        </span>{" "}
                        CONTINUE WITH GOOGLE
                      </button>
                    </div>
                  </form> 
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterPart/>
      </>
  );
};

export default Login;