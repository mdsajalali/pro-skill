import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Course from "../Course/Course";
import ReCourse from "../ReCourse/ReCourse";
import About from "../About/About";
import Achievement from "../Achievement/Achievement";
import VideoLaptop from "../VideoLaptop/VideoLaptop";
import Feedback from "../Feedback/Feedback";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Course />
      <ReCourse />
      <About />
      <Achievement />
      <VideoLaptop />
      <Feedback />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
