import React from "react";
import "./ButtonPart.css";

export default function ButtonPart() {
  return (
    <div>
      <button className="btn_pro px-3 py-2">
        {" "}
        Details
        <i className="fa-solid fa-angles-right ms-2 "></i>
      </button>
    </div>
  );
}
