import React from "react";
import "./Parallax.css";
import parallaximg from "./images/shoe_section.jpg";

export default function Paralex() {
  return (
    <div>
      <div
        className="parallax parallax_part mt-5"
        style={{ backgroundImage: `url(${parallaximg})` }}
      ></div>
    </div>
  );
}
