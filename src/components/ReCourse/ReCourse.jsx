import React from "react";
import "./ReCourse.css";
import Thumbnail from "../../assets/images/course-thumbnail.png";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const ReCourse = () => {
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
          <div className="recourse-box">
            <div className="recourse-img">
              <img src={Thumbnail} alt="Thumbnail" />

              <div className="title">
                <div className="thumbnail-title">
                  <span>Graphic Design</span>
                  <button className="recourse-btn">8h 17min</button>
                </div>
                <div className="thumbnail-heading">
                  How To Become Great Graphic Designer in 7 Days
                </div>
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

          <div className="recourse-box">
            <div className="recourse-img">
              <img src={Thumbnail} alt="Thumbnail" />

              <div className="title">
                <div className="thumbnail-title">
                  <span>Graphic Design</span>
                  <button className="recourse-btn">8h 17min</button>
                </div>
                <div className="thumbnail-heading">
                  How To Become Great Graphic Designer in 7 Days
                </div>
                <div className="recourse-review">
                  <div>
                    <AiFillStar className="review-icon" />
                    <AiFillStar className="review-icon" />
                    <AiFillStar className="review-icon" />
                    <AiFillStar className="review-icon" />
                    <FaStarHalfAlt className="review-half" />{" "}
                    <span>(15,250)</span>
                  </div>
                  <div>2,526,471 Views</div>
                </div>
              </div>
            </div>
          </div>
          <div className="recourse-box">
            <div className="recourse-img">
              <img src={Thumbnail} alt="Thumbnail" />

              <div className="title">
                <div className="thumbnail-title">
                  <span>Graphic Design</span>
                  <button className="recourse-btn">8h 17min</button>
                </div>
                <div className="thumbnail-heading">
                  How To Become Great Graphic Designer in 7 Days
                </div>
                <div className="recourse-review">
                  <div>
                    <AiFillStar className="review-icon" />
                    <AiFillStar className="review-icon" />
                    <AiFillStar className="review-icon" />
                    <AiFillStar className="review-icon" />
                    <FaStarHalfAlt className="review-half" />{" "}
                    <span>(15,250)</span>
                  </div>
                  <div>2,526,471 Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReCourse;
