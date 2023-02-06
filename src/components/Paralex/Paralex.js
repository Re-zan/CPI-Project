import React from "react";

import parallaximg from "./images/shoe_section.jpg";

export default function Paralex() {
  return (
    <div>
      <div
        className="parallax"
        style={{ backgroundImage: `url(${parallaximg})` }}
      ></div>
    </div>
  );
}
