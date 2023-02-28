import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Firebase.init";
import "./TopMenu.css";
export default function TopMenu() {
  const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken")
    };
  return (
    <>
      <div className="topheader border-bottom py-4">
        <Container>
          <div className=" d-flex justify-content-between">
            <div>
              <NavLink to="https://www.facebook.com/">
                {" "}
                <i className="fa-brands fa-square-facebook header_social_icon fs-6 me-3  rounded p-1"></i>
              </NavLink>{" "}
              <NavLink to="https://www.instagram.com/">
                {" "}
                <i className="fa-brands fs-6 me-3 header_social_icon rounded p-1 fa-twitter "></i>
              </NavLink>{" "}
              <NavLink to="https://www.youtube.com/">
                {" "}
                <i className="fa-brands fa-square-instagram header_social_icon fs-6 me-3  rounded p-1"></i>
              </NavLink>{" "}
              <NavLink to="https://bd.linkedin.com/">
                {" "}
                <i className="fa-brands fa-linkedin header_social_icon fs-6 me-3  rounded p-1"></i>
              </NavLink>{" "}
            </div>

            <div className="">
            {
              user
              ?
              <NavLink to="/login" onClick={logOut}>
                <span className="text-dark">SingOut</span>
              </NavLink>
              :
              <NavLink to="/login">
              <span className="text-dark">Login</span>
            </NavLink>
            }
              /{" "}
              <NavLink to="/register">
                <span className="text-dark">Register</span>
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
