import React from "react";
import "./Course.css";
import Business from "../../assets/images/buiness.png";
import Design from "../../assets/images/design.png";
import Development from "../../assets/images/development.png";
import Language from "../../assets/images/language.png";
import Gaming from "../../assets/images/gaming.png";

const Course = () => {
  return (
    <section id="course">
      <div className="course">
        <div className="course-box">
          <img src={Business} alt="Business" className="course-img" />
          <p>Business</p>
        </div>
        <div className="course-box">
          <img src={Design} alt="Business" className="course-img" />
          <p>Design</p>
        </div>
        <div className="course-box">
          <img src={Development} alt="Business" className="course-img" />
          <p>Developement</p>
        </div>
        <div className="course-box">
          <img src={Language} alt="Business" className="course-img" />
          <p>Language</p>
        </div>
        <div className="course-box">
          <img src={Gaming} alt="Business" className="course-img" />
          <p>Gaming</p>
        </div>
        <div className="course-box plusHover">
           <span className="plus">+</span>
          <p>View Other</p>
        </div>
      </div>
    </section>
  );
};

export default Course;
