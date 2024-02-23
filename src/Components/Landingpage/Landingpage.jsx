import React from "react";
import "./Landingpage.css";
import star from "../../assets/images/Star-2.svg";
import samll_ellipse from "../../assets/images/Small-Elipse.svg";
import half_shape from "../../assets/images/Half-Shape.svg";
import wave from "../../assets/images/Waves_2.svg";
import eye from "../../assets/images/Eye2.svg";


function Landingpage() {


  return (
    <div className="wrap">
      <div className="svgs">
        <img src={star} alt="star" className="star allsvg" />
        <img src={samll_ellipse} alt="star" className="sellipse allsvg" />
        <img src={half_shape} alt="star" className="hshape allsvg" />
        <img src={wave} alt="star" className="wave allsvg" />
        <img src={eye} alt="star" className="eye allsvg" />
      </div>
      <div className="h-container flex">
        <div className="text-sm">Hi, I am Vaibhav</div>
        <div className="text-lg">
          Mastering the <span className="grad">Cloud.</span> Advanced Solutions
          for Complex Challenges
        </div>
        <div className="links flex">
          <a href="#github">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#linkedin">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
