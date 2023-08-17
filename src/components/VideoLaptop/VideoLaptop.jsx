import React from "react";
import "./VideoLaptop.css";
import Laptop from "../../assets/images/video-laptop.png";
import {AiOutlinePlayCircle} from "react-icons/ai"
 

const VideoLaptop = () => {
  return (
    <section>
      <div className="videoLaptop">
        <img src={Laptop} alt="" />
        <div className="icon">
         <AiOutlinePlayCircle />
      </div>
      </div>
      
    </section>
  );
};

export default VideoLaptop;
