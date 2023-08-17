import React from "react";
import "./Achivement.css";

const Achivement = () => {
  return (
    <section id="achivement">
      <div className="achivement">
        <div className="achivement-heading">
          <h1>Our Achievements</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
        <div className="achive">
          <div className="achive-length">
            <h2 className="online-course">2400+</h2>
            <p>Online Course</p>
          </div>
          <div className="achive-length">
            <h2 className="enroll-student">99,854+</h2>
            <p>Enroll Student</p>
          </div>
          <div className="achive-length">
            <h2 className="expert-instructor">650+</h2>
            <p>Expert Instructor</p>
          </div>
          <div className="achive-length">
            <h2 className="profile-review">1820+</h2>
            <p>Profile Review</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivement;
