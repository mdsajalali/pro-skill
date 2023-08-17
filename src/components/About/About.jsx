import React from "react";
import "./About.css";
import AboutImg from "../../assets/images/about.jpg";
import { FaLocationArrow } from "react-icons/fa";

const About = () => {
  return (
    <section>
      <div className="about">
        <div className="about-img">
          <img src={AboutImg} alt="" />
        </div>
        <div>
          <div className="about-title">
            <h1>Why You Should</h1>
            <h2>Choose Us</h2>
            <span></span>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              some form, by injected humour.
            </p>
          </div>

          <div className="review-cate">
            <div className="about-cate">
              <span>
                <FaLocationArrow />
              </span>
              <div>24000+ Online Course</div>
            </div>
            <div className="about-cate">
              <span>
                <FaLocationArrow />
              </span>
              <div>Expert Instruction</div>
            </div>
            <div className="about-cate">
              <span>
                <FaLocationArrow />
              </span>
              <div>Unlimited Access</div>
            </div>
            <div className="about-cate">
              <span>
                <FaLocationArrow />
              </span>
              <div>Comfortable Prices</div>
            </div>
            <div className="about-cate">
              <span>
                <FaLocationArrow />
              </span>
              <div>Free 2 Month Trail</div>
            </div>
            <div className="about-cate">
              <span>
                <FaLocationArrow />
              </span>
              <div>Review System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
