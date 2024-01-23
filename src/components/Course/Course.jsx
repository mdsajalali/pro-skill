import Business from "../../assets/images/business.png";
import Design from "../../assets/images/design.png";
import Development from "../../assets/images/development.png";
import Gaming from "../../assets/images/gaming.png";
import Language from "../../assets/images/language.png";
import "./Course.css";

const Course = () => {
  const courses = [
    { image: Business, alt: "Business", title: "Business" },
    { image: Design, alt: "Design", title: "Design" },
    { image: Development, alt: "Development", title: "Development" },
    { image: Language, alt: "Language", title: "Language" },
    { image: Gaming, alt: "Gaming", title: "Gaming" },
  ];

  return (
    <section id="course">
      <div className="course">
        {courses.map((course, index) => (
          <div key={index} className="course-box">
            <img src={course.image} alt={course.alt} className="course-img" />
            <p>{course.title}</p>
          </div>
        ))}
        <div className="course-box plusHover">
          <span className="plus">+</span>
          <p>View Other</p>
        </div>
      </div>
    </section>
  );
};

export default Course;
