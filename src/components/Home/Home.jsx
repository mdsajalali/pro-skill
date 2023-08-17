import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Course from "../Course/Course";
import ReCourse from "../ReCourse/ReCourse";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Course />
      <ReCourse />
      <About />
    </div>
  );
};

export default Home;
