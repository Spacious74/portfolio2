import React from "react";
import "./Aboutpage.css";
import ellipse from "../../assets/images/Ellipse.svg";
import bar from "../../assets/images/bar_3.svg";

function Aboutpage() {
  return (
    <div className="wrap">
      <div className="svgs">
        <img src={ellipse} alt="svg" className="ellipse asvg" />
        <img src={bar} alt="svg" className="bar asvg" />
      </div>
      <div className="about-container flex" id="about">
        <div className="ab-head">About me</div>
        <div className="about-text">
          Hello! I'm Vaibhav Kumar Sharma, you can call me Vaibhav. I’m a
          designer from India currently living in Amsterdam. With over a decade
          of experience, I have helped clients solve real business cases and
          grow their businesses by using design thinking and strategy.
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
