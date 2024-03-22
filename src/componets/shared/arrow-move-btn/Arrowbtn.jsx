import React from "react";
import "./arrowbtn.scss";
import Arrow from "../arrow";
import { IoIosArrowForward } from "react-icons/io";

const Arrowbtn = ({ text }) => {
  return (
    <button id="abtn-main">
      <span className="abtn-text">{text}</span>
      <span className="abtn-icon">
        <IoIosArrowForward />
      </span>
    </button>
  );
};

export default Arrowbtn;
