import React from "react";
import "./Myskills.css";
import sketch from "../../assets/images/sketch.svg";
function Myskills() {
  return (
    <div className="wrap">
      <div className="svgs">
        <img src={sketch} alt="svg" className="allsvg sketch" />
      </div>
      <div className="skills-container flex">
        <div className="skillhead">
          <img
            src="https://img.icons8.com/windows/70/484849/up-left-arrow.png"
            className="icon"
            alt="up-left-arrow"
          />
          Skills
        </div>
        <div className="skills flex">
          
          <div className="category flex">
            <div className="categoryhead">Cloud</div>
            <div className="cate-skills flex">
              <div className="skillwrap">
                <div className="skill">Cloud engineering</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Kubernetes</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Ansible</div>
              </div>
              <div className="skillwrap">
                <div className="skill">AWS</div>
              </div>
            </div>
          </div>

          <div className="category flex">
            <div className="categoryhead">Backend</div>
            <div className="cate-skills flex">
              <div className="skillwrap">
                <div className="skill">Python</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Django</div>
              </div>
            </div>
          </div>

          <div className="category flex">
            <div className="categoryhead">Frontend</div>
            <div className="cate-skills flex">
              <div className="skillwrap">
                <div className="skill">HTML5</div>
              </div>
              <div className="skillwrap">
                <div className="skill">CSS3</div>
              </div>
              <div className="skillwrap">
                <div className="skill">Javascript</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myskills;
