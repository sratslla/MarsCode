import React from "react";
import LeftArrow from "./icons/LeftArrow.svg";
import RightArrow from "./icons/RightArrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        <img alt="" src={direction === "next" ? RightArrow : LeftArrow} />

      </button>
    );
}