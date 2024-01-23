import { FaLocationArrow } from "react-icons/fa";
import AboutImg from "../../assets/images/about.jpg";
import "./About.css";

const About = () => {
  const categories = [
    { icon: <FaLocationArrow />, title: "24000+ Online Course" },
    { icon: <FaLocationArrow />, title: "Expert Instruction" },
    { icon: <FaLocationArrow />, title: "Unlimited Access" },
    { icon: <FaLocationArrow />, title: "Comfortable Prices" },
    { icon: <FaLocationArrow />, title: "Free 2 Month Trail" },
    { icon: <FaLocationArrow />, title: "Review System" },
  ];
  return (
    <section id="about">
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
            {categories.map((category, index) => (
              <div key={index} className="about-cate">
                <span>{category.icon}</span>
                <div>{category.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
