import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import Thumbnail from "../../assets/images/course-thumbnail.png";
import "./ReCourse.css";

const ReCourse = () => {
  const recommendedCourses = [
    {
      img: Thumbnail,
      title: "Graphic Design",
      duration: "8h 17min",
      heading: "How To Become Great Graphic Designer in 7 Days",
      stars: 4.5,
    },
    {
      img: Thumbnail,
      title: "Graphic Design",
      duration: "8h 17min",
      heading: "How To Become Great Graphic Designer in 7 Days",
      stars: 4.5,
    },
    {
      img: Thumbnail,
      title: "Graphic Design",
      duration: "8h 17min",
      heading: "How To Become Great Graphic Designer in 7 Days",
      stars: 4.5,
    },
  ];
  return (
    <div id="recourse">
      <div className="recourse">
        <div className="recourse-heading">
          <div className="heading">
            Recommended <span>Courses</span>
          </div>
          <button className="btn btn-recourse">Start 7 Days Trail</button>
        </div>
        <div className="box">
          {recommendedCourses.map((course, index) => (
            <div key={index} className="recourse-box">
              <div className="recourse-img">
                <img src={course.img} alt="Thumbnail" /> 
                <div className="title">
                  <div className="thumbnail-title">
                    <span>{course.title}</span>
                    <button className="recourse-btn">{course.duration}</button>
                  </div>
                  <div className="thumbnail-heading">{course.heading}</div>
                  <div className="recourse-review">
                    <div>
                      <AiFillStar className="review-icon" />
                      <AiFillStar className="review-icon" />
                      <AiFillStar className="review-icon" />
                      <AiFillStar className="review-icon" />
                      <FaStarHalfAlt className="review-half" />
                      <span>(15,250)</span>
                    </div>
                    <div>2,526,471 Views</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReCourse;
