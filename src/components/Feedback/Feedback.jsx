import React from "react";
import "./Feedback.css";
import Student1 from "../../assets/images/student-1.jpg";
import Student2 from "../../assets/images/student-2.jpg";

const Feedback = () => {
  return (
    <section id="feedback">
      <div className="feedback">
        <div className="feedback-heading">
          <h1>
            Enroll Student's <span>Feedback</span>
          </h1>
          <button className="btn feedback-btn">View More</button>
        </div>
        <div className="card">
          <div className="feedback-card">
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the race.
            </p>
            <img src={Student1} alt="" />
            <h3>Amanda Jackson</h3>
            <h5>CEO, NRD GROUP</h5>
          </div>

          <div className="feedback-card">
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the race.
            </p>
            <img src={Student2} alt="" />
            <h3>Amanda Jackson</h3>
            <h5>CEO, NRD GROUP</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
