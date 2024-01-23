import "./Achievement.css";

const Achievement = () => {
  const achievements = [
    { value: "2400+", label: "Online Courses", class: "online-course" },
    { value: "99,854+", label: "Enrolled Students", class: "enroll-student" },
    { value: "650+", label: "Expert Instructors", class: "expert-instructor" },
    { value: "1820+", label: "Profile Reviews", class: "profile-review" },
  ];
  return (
    <section id="achievement">
      <div className="achievement">
        <div className="achievement-heading">
          <h1>Our Achievement</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
        <div className="achieve">
          {achievements.map((achieve, index) => (
            <div key={index} className="achieve-length">
              <h2 className={achieve.class}>{achieve.value}</h2>
              <p>{achieve.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
