import React from "react";
import "./Projectpage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/project-img1.png";
import img2 from "../../assets/images/project-img2.png";
import img3 from "../../assets/images/project-img3.png";

import sqaure from '../../assets/images/Square_1.svg'
import onefour from '../../assets/images/One-Forth-Ellipse.svg'

function Projectpage() {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  };
  return (
    <div className="wrap">
      <div className="svgs">
        <img src={sqaure} alt="svg" className="square allsvg" />
        <img src={onefour} alt="svg" className="onefour allsvg" />
      </div>
      <div className="project-container" id="project">
        <div className="prohead">My Projects</div>

        <div className="project-section flex">
          <div className="pro-img">
            <Carousel
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                )
              }
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </button>
                )
              }
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              swipeable={true}
            >
              <div className="carousel-img">
                <img src={img1} alt="project1" />
              </div>
              <div className="carousel-img">
                <img src={img2} alt="project2" />
              </div>
              <div className="carousel-img">
                <img src={img3} alt="project3" />
              </div>
            </Carousel>
          </div>
          <div className="project-info flex">
            <div className="pro-title">Library management system.</div>
            <div className="pro-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              consequatur nam architecto id quia, ipsum nulla consectetur est
              eos perferendis.
            </div>
            <div className="pro-tech">
              <b className="grad">Tech stack : </b> HTML, CSS, Flask, Python,
              SQL, Javascript.
            </div>
            <div className="pro-link flex">
              <a href="#link" className="btn" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i> &nbsp;Code
              </a>
              <a href="https://vaibhavksharma.pythonanywhere.com/" target="_blank" rel="noreferrer" className="btn">
                Deployed&nbsp; <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          className="project-section flex"
          style={{ flexDirection: "row-reverse" }}
        >
          <div className="pro-img">
            <Carousel
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                )
              }
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    className="slide-btn flex"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <i class="fa-solid fa-arrow-left-long"></i>
                  </button>
                )
              }
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              swipeable={true}
            >
              <div className="carousel-img">
                <img src={img1} alt="project1" />
              </div>
              <div className="carousel-img">
                <img src={img2} alt="project2" />
              </div>
              <div className="carousel-img">
                <img src={img3} alt="project3" />
              </div>
            </Carousel>
          </div>
          <div className="project-info flex">
            <div className="pro-title">Library management system.</div>
            <div className="pro-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              consequatur nam architecto id quia, ipsum nulla consectetur est
              eos perferendis.
            </div>
            <div className="pro-tech">
              <b className="grad">Tech stack : </b> HTML, CSS, Flask, Python,
              SQL, Javascript.
            </div>
            <div className="pro-link flex">
              <a href="#link" className="btn">
                <i class="fa-brands fa-github"></i> &nbsp;Code
              </a>
              <a href="#link" className="btn">
                Deployed&nbsp; <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpage;
