import Student1 from "../../assets/images/student-1.jpg";
import Student2 from "../../assets/images/student-2.jpg";
import "./Feedback.css";

const Feedback = () => {
  const feedbackData = [
    {
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.",
      image: Student1,
      name: "Amanda Jackson",
      position: "CEO, NRD GROUP",
    },
    {
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.",
      image: Student2,
      name: "Amanda Jackson",
      position: "CEO, NRD GROUP",
    },
  ];
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
          {feedbackData.map((data, index) => (
            <div key={index} className="feedback-card">
              <p>{data.text}</p>
              <img src={data.image} alt="" />
              <h3>{data.name}</h3>
              <h5>{data.position}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
