import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Course from '../Course/Course'
import ReCourse from '../ReCourse/ReCourse'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Course />
        <ReCourse />
    </div>
  )
}

export default Home