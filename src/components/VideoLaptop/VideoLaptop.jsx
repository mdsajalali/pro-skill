import { AiOutlinePlayCircle } from "react-icons/ai";
import Laptop from "../../assets/images/video-laptop.png";
import "./VideoLaptop.css";

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
