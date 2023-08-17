import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Course from "../Course/Course";
import ReCourse from "../ReCourse/ReCourse";
import About from "../About/About";
import Achivement from "../Achivement/Achivement";
import VideoLaptop from "../VideoLaptop/VideoLaptop";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Course />
      <ReCourse />
      <About />
      <Achivement />
      <VideoLaptop />
      <Feedback />
    </div>
  );
};

export default Home;
